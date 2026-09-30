"""Silent 5:00 cut of the Teams recording, plus a timed voice-over script (Markdown and SRT).

Each shot is (source start, source end, voice-over line). Shots were chosen from 2-second contact sheets of the
recording. The frame is cropped to the Creatio window only (no webcams, no browser tabs/bookmarks) and letterboxed
to 1920x1080. Hard cuts only, so the voice-over timestamps stay exact.
"""
import os
import subprocess

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "Call with Pranshu Basak-20260930_150516-Meeting Recording (1).mp4")
OUT = os.path.join(HERE, "Project Assistant - 5 min (silent).mp4")
MD = os.path.join(HERE, "Project Assistant - 5 min voice-over.md")
SRT = os.path.join(HERE, "Project Assistant - 5 min voice-over.srt")
FF = os.path.expandvars(r"%LOCALAPPDATA%\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe"
                        r"\ffmpeg-9.0.2-full_build\bin\ffmpeg.exe")
CROP = "crop=1672:836:0:177"  # the Creatio window inside the shared screen
FRAME = f"{CROP},scale=1920:-2,pad=1920:1080:0:(oh-ih)/2:color=0x141414,setsar=1"

SHOTS = [
    (30.0, 40.0, "Problem", "Creatio home dashboard",
     "Appliance makers win hotel and apartment deals years before opening day. Leads arrive by email, phone and "
     "spreadsheets, and all are retyped by hand."),
    (124.0, 138.0, "Email", "Customer email on Elena Marsh's contact",
     "Qualifying one lead used to take a sales rep up to five hours. Here is a customer email in Creatio: "
     "Alderwood Hospitality is planning a new hotel in Raleigh."),
    (147.0, 161.0, "Email", "Email pasted into Project Assistant",
     "Meet Project Assistant, our Creatio AI Studio agent. I paste the email into the chat and ask it to capture "
     "a new project intake. That is all I type."),
    (204.0, 230.0, "Scoring", "Scoring factors, rules and priority bands",
     "While it reads the email, here is how we qualify leads. Sales operations keeps the scoring inside Creatio: "
     "eight weighted factors, such as construction value, units, project type, stage, dealer tier and our history "
     "with the developer. Each factor has plain rules, and the total maps to priority bands. The agent reads them "
     "live and never invents a score."),
    (240.0, 260.0, "Email", "Capture preview, then 'add category, create it'",
     "The agent returns a preview: The Linwood Hotel and Residences, two hundred sixty keys, about one hundred "
     "forty-two million dollars, with all four companies matched to CRM accounts. Nothing is saved until I "
     "confirm, so I add the category and tell it to create the intake."),
    (369.0, 383.0, "Email", "New Project Intake record",
     "A Project Intake is created: a staging record that comes before a project, with its number, status, the "
     "source Email, and every fact the agent pulled from the text."),
    (440.0, 462.0, "Email", "Stakeholders tab: companies and key contact linked",
     "On the Stakeholders tab, each company in the email is linked to its real account: the developer, the "
     "architect, the builder and the dealer. The key contact, Elena Marsh, is linked too, with her details "
     "filled in from CRM."),
    (478.0, 492.0, "Verdict", "Verdict proposed in chat",
     "Then the verdict. The agent checks for duplicate projects and open opportunities, scores every factor, and "
     "proposes a Strategic Pursuit at eighty-nine point seven five."),
    (652.0, 678.0, "Verdict", "AI Verdict tab: qualification explanation",
     "Saved to the AI Verdict tab, the score is explained line by line: construction value, units, project type, "
     "stage, a resolved architect, an A-tier dealer, and five points because Alderwood has bought from us before. "
     "Every point traces back to a rule, so anyone can see why this lead is worth chasing."),
    (752.0, 770.0, "Apply", "Prepare the apply plan; owner requested",
     "Now I ask for the apply plan. The agent never writes on its own. It first asks who should own the new "
     "records, and I name the responsible sales director."),
    (804.0, 822.0, "Apply", "Apply plan: project, parties, opportunity",
     "The plan lists exactly what will be created: the project, four involved parties, and an opportunity with "
     "the dealer as partner. The email's request to approve everything is treated as data, not an instruction. "
     "Only my yes applies it."),
    (1054.0, 1072.0, "Apply", "Applied: project and opportunity created",
     "Applied. The project and the opportunity now exist, the four involved parties are linked, and the intake "
     "is marked Applied with links to both. Hours of work became a few minutes."),
    (1104.0, 1120.0, "Result", "The new opportunity",
     "Here is the opportunity: account, contact, owner, and the dealer as partner, all filled in by the agent "
     "and linked to the new project."),
    (1134.0, 1152.0, "Result", "The new project record",
     "And the project itself: the account, category and Strategic Pursuit classification carried over, its "
     "stakeholders attached, and a link back to the intake it came from, so the history is never lost."),
    (918.0, 934.0, "Excel", "Dodge export attached in chat",
     "Second scenario: the weekly Dodge export. I attach the spreadsheet straight into the chat and ask the "
     "agent to import the projects."),
    (1188.0, 1210.0, "Excel", "Import preview: 3 new, 1 blocked",
     "The agent reads every row, maps the columns and checks each project for duplicates. Three rows are new, "
     "with their companies linked. One row has no Dodge project ID, so it is blocked: it could never be "
     "de-duplicated, and the agent says why instead of guessing."),
    (1280.0, 1294.0, "Excel", "Three intakes created",
     "One confirmation creates all three intakes, ready for their verdicts. From an email or a spreadsheet to a "
     "qualified, explainable pursuit in minutes, with a person accountable for every record."),
]


# The voice-over wording lives in voice-over-lines.json (one line per shot, same order) so it can be edited
# without touching the shot list. If present, it replaces the lines above.
_LINES = os.path.join(HERE, "voice-over-lines.json")
if os.path.exists(_LINES):
    import json
    _vo = json.load(open(_LINES, encoding="utf-8"))
    assert len(_vo) == len(SHOTS), "voice-over-lines.json needs one line per shot"
    SHOTS = [(a, b, sec, scr, line) for (a, b, sec, scr, _), line in zip(SHOTS, _vo)]


def ts(t, srt=False):
    ms = int(round(t * 1000))
    h, m, s, r = ms // 3600000, ms // 60000 % 60, ms // 1000 % 60, ms % 1000
    return f"{h:02d}:{m:02d}:{s:02d},{r:03d}" if srt else f"{m}:{s:02d}"


def write_script():
    md = ["# Project Assistant — 5:00 voice-over script",
          "",
          "Matches `Project Assistant - 5 min (silent).mp4` exactly (hard cuts). Record each line inside its slot; "
          "about 150 words per minute fits every slot. The same text is in the `.srt` file for timeline import.",
          "",
          "| # | Time | Section | On screen | Voice-over | Words |",
          "|---|---|---|---|---|---|"]
    srt, t = [], 0.0
    for i, (a, b, sec, scr, vo) in enumerate(SHOTS, 1):
        d = b - a
        md.append(f"| {i} | {ts(t)}–{ts(t + d)} | {sec} | {scr} | {vo} | {len(vo.split())} |")
        srt.append(f"{i}\n{ts(t + 0.2, True)} --> {ts(t + d - 0.2, True)}\n{vo}\n")
        t += d
    md += ["", f"Total: {ts(t)} · {sum(len(s[4].split()) for s in SHOTS)} words."]
    open(MD, "w", encoding="utf-8").write("\n".join(md) + "\n")
    open(SRT, "w", encoding="utf-8").write("\n".join(srt))
    return t


def render():
    parts = [f"[0:v]trim=start={a}:end={b},setpts=PTS-STARTPTS,{FRAME}[v{i}];" for i, (a, b, *_) in enumerate(SHOTS)]
    graph = "".join(parts) + "".join(f"[v{i}]" for i in range(len(SHOTS))) + \
        f"concat=n={len(SHOTS)}:v=1:a=0[vc];[vc]fps=30,format=yuv420p[vo]"
    subprocess.run([FF, "-hide_banner", "-y", "-i", SRC, "-filter_complex", graph, "-map", "[vo]", "-an",
                    "-c:v", "libx264", "-preset", "medium", "-crf", "18", "-color_primaries", "bt709",
                    "-color_trc", "bt709", "-colorspace", "bt709", "-movflags", "+faststart", OUT], check=True)


if __name__ == "__main__":
    total = write_script()
    print(f"{len(SHOTS)} shots, {ts(total)}")
    render()
    print("wrote", OUT)
