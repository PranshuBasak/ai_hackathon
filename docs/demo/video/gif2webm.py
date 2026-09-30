"""Convert every GIF in a folder to WebM (VP8).

Pillow splits the GIF into frames and Playwright's bundled ffmpeg encodes them. That ffmpeg build only
has the file protocol, the MJPEG decoder and the VP8 encoder, so the frames go through a temporary .mjpeg file.
Usage: python gif2webm.py <folder>
"""
import glob
import os
import subprocess
import sys

from PIL import Image, ImageSequence

FF = os.path.expandvars(r"%LOCALAPPDATA%\ms-playwright\ffmpeg-1011\ffmpeg-win64.exe")
FPS = 25

for gif in sorted(glob.glob(os.path.join(sys.argv[1], "*.gif"))):
    im = Image.open(gif)
    w, h = im.size
    w -= w % 2
    h -= h % 2
    tmp = gif[:-4] + ".mjpeg"
    out = gif[:-4] + ".webm"
    with open(tmp, "wb") as f:
        for fr in ImageSequence.Iterator(im):
            frame = fr.convert("RGB").crop((0, 0, w, h))
            hold = max(1, round(fr.info.get("duration", 100) / (1000 / FPS)))  # keep each GIF frame's own duration
            for _ in range(hold):
                frame.save(f, "JPEG", quality=95)
    r = subprocess.run([FF, "-y", "-loglevel", "error", "-f", "image2pipe", "-c:v", "mjpeg", "-framerate", str(FPS), "-i", tmp,
                        "-c:v", "libvpx", "-b:v", "4M", "-pix_fmt", "yuv420p", out])
    os.remove(tmp)
    print(os.path.basename(out), "ok" if r.returncode == 0 else f"failed ({r.returncode})")
