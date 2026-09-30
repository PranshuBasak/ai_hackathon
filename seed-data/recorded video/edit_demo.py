"""Cut the Teams recording into the submission video (single-pass FFmpeg, per the video-processing-editing skill).

Keeps the problem statement, the email flow and the Excel flow; drops the AI waits, retries and fumbles.
Cut points were chosen from the VTT transcript and contact sheets, then snapped to audio pauses (silencedetect).
Outputs: the edited MP4 and captions re-timed to the edit (SRT).
"""
import os
import re
import subprocess

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "Call with Pranshu Basak-20260930_150516-Meeting Recording (1).mp4")
VTT = os.path.join(HERE, "Call with Pranshu Basak.vtt")
OUT = os.path.join(HERE, "Project Assistant - demo (edited).mp4")
SRT = os.path.join(HERE, "Project Assistant - demo (edited).srt")
FF = os.path.expandvars(r"%LOCALAPPDATA%\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe"
                        r"\ffmpeg-9.0.2-full_build\bin\ffmpeg.exe")

# (start, end) in source seconds, snapped to pauses. Comments say what each segment carries.
SEGMENTS = [
    (21.80, 81.94),     # intro and the problem statement
    (83.62, 150.50),    # the agent's goal (5 hours to minutes); the Linwood email arrives
    (150.89, 170.04),   # paste the email into the chat
    (170.73, 232.20),   # capture, then what a verdict is: scoring factors, rules, priority bands (settings shown)
    (237.01, 271.50),   # capture preview; "yes, add category, create it"
    (279.97, 287.00),   # what a project intake is
    (290.86, 361.50),   # verdict: dedup and stakeholder checks; one hour becomes one minute
    (369.24, 384.05),   # the intake form: number, status, source
    (435.30, 492.30),   # stakeholders linked to CRM accounts and contact; the verdict arrives; "save it"
    (506.00, 538.82),   # the AI verdict tab fields
    (649.54, 717.92),   # qualification explanation: 89.75 Strategic Pursuit; prepare the apply plan
    (720.07, 776.80),   # apply: email treated as data, not instructions; relationship; project creation
    (800.49, 814.95),   # time saved: hours to under 10 minutes
    (822.33, 849.15),   # what the rep can do with the time
    (879.94, 957.90),   # Excel: the Dodge export attached to the chat
    (1023.89, 1044.00), # back to the Linwood chat
    (1052.82, 1097.20), # project and opportunity created, 4 involved parties
    (1101.81, 1111.48), # the opportunity record
    (1123.47, 1146.36), # the project record and its involved parties
    (1180.64, 1273.00), # the Excel result: 3 new, 1 blocked (no source ID); closing
]
FADE = 0.05


def build_video():
    parts, labels = [], []
    for i, (a, b) in enumerate(SEGMENTS):
        d = b - a
        parts.append(f"[0:v]trim=start={a}:end={b},setpts=PTS-STARTPTS[v{i}];")
        parts.append(f"[0:a]atrim=start={a}:end={b},asetpts=PTS-STARTPTS,"
                     f"afade=t=in:st=0:d={FADE},afade=t=out:st={d - FADE:.3f}:d={FADE}[a{i}];")
        labels.append(f"[v{i}][a{i}]")
    graph = "".join(parts) + "".join(labels) + f"concat=n={len(SEGMENTS)}:v=1:a=1[vc][ac];" \
        "[vc]fps=30,format=yuv420p[vo];[ac]aresample=48000,loudnorm=I=-16:TP=-1.5:LRA=11,aformat=channel_layouts=stereo[ao]"
    cmd = [FF, "-hide_banner", "-y", "-i", SRC, "-filter_complex", graph, "-map", "[vo]", "-map", "[ao]",
           "-c:v", "libx264", "-preset", "medium", "-crf", "20", "-color_primaries", "bt709", "-color_trc", "bt709",
           "-colorspace", "bt709", "-movflags", "+faststart", "-c:a", "aac", "-b:a", "160k", "-ar", "48000", OUT]
    subprocess.run(cmd, check=True)


def to_s(x):
    h, m, s = x.split(":")
    return int(h) * 3600 + int(m) * 60 + float(s)


def fmt(t):
    ms = int(round(t * 1000))
    return f"{ms // 3600000:02d}:{ms // 60000 % 60:02d}:{ms // 1000 % 60:02d},{ms % 1000:03d}"


def build_captions():
    text = open(VTT, encoding="utf-8").read()
    cues = re.findall(r"(\d\d:\d\d:\d\d\.\d+) --> (\d\d:\d\d:\d\d\.\d+)\n<v [^>]+>(.*?)</v>", text, re.S)
    out, n, offset = [], 0, 0.0
    for a, b in SEGMENTS:
        for s, e, t in cues:
            s, e = to_s(s), to_s(e)
            if e <= a or s >= b:
                continue
            s2, e2 = max(s, a) - a + offset, min(e, b) - a + offset
            if e2 - s2 < 0.3:
                continue
            n += 1
            out.append(f"{n}\n{fmt(s2)} --> {fmt(e2)}\n{' '.join(t.split())}\n")
        offset += b - a
    open(SRT, "w", encoding="utf-8").write("\n".join(out))
    return offset


if __name__ == "__main__":
    total = build_captions()
    print(f"segments: {len(SEGMENTS)}, edited length {int(total // 60)}:{int(total % 60):02d}")
    build_video()
    print("wrote", OUT)
