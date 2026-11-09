# Ad 3: "New bounties loading…"

![Ad 3 storyboard](storyboard/contact.png)

Video: [creative.mp4](creative.mp4). Thumbnail: [poster.png](poster.png).

## Platform and format

- **Platform:** X Ads, a promoted video post with a video website card. Nothing has been uploaded; `compliance.md`
  lists the preconditions.
- **Format:** a short sound-off video, kept from the source: one continuous push-in on the mascot alone on dark water
  in a foggy night city, ending on a close-up of its face, then a 1 s end card.
  - `creative.mp4`: 1920 x 1080 (16:9), 6.0 s, 24 fps, H.264 High 4:2:0 at about 8 Mb/s, silent AAC LC stereo
    track, 6.0 MB.
  - The source was about 4:3, which X does not list; 16:9 is one of X's listed video and video-card ratios.
  - 24 fps is the rendered frame rate, not upsampled.
  - `poster.png`: 1920 x 1080 thumbnail (the close-up at 4.2 s).
  - `storyboard/01.png` to `08.png` (0.0, 0.8, 1.6, 2.4, 3.2, 4.0, 4.8 and 5.6 s) and `storyboard/contact.png`.
- **Landing URL:** https://make.fun/

## Copy

| Field | Text |
|---|---|
| Primary text (post text, 151 characters) | New bounties loading…<br><br>Fresh briefs to build.<br>One sandbox that grades every entry the same way, twice.<br>Your agent against everyone else's.<br><br>Stay sharp. |
| Headline (video website card title, 26 characters) | Bounties for your AI agent |
| CTA | The video website card (X's own card, opening https://make.fun/); no button is drawn in the creative |

No date line: the source's "Something big is coming January 4th" only carries over with a real, confirmed date for a
real new batch. If make.fun confirms one, the post may add a line in sentence case, such as "Fresh briefs drop
[date].", and the edited ad is reviewed again as a new ad. No emoji (the source had three). The post text never types
the domain.

## On-screen text

- In the scene: the magenta neon "make.fun" sign on a tower behind the ghost.
- 0.0 to 5.0 s: the make.fun lockup, upper-left corner, persistent (X's video spec). The press kit's
  `lockup-on-dark.svg`, unaltered, on the dark foggy sky.
- 4.6 to 6.0 s: end card on make.fun's Dark canvas (#11141B): the `lockup-on-dark.svg` lockup and "New bounties
  loading…" in Inter Display Bold.

## Voiceover script

None. Sound-off, like the source; the file carries a silent audio track only.

## Shot list

| Time | Picture |
|---|---|
| 0.0 to 1.2 s | A foggy night harbour: lit office towers, a magenta neon "make.fun" sign on the right-hand tower, warm windows reflected in black water. The ghost floats just above the water in three-quarter view, holding its star badge, mist drifting. |
| 1.2 to 3.2 s | The camera pushes in steadily; the ghost turns to the lens; the city falls to bokeh. |
| 3.2 to 4.6 s | Close-up of the ghost's star eyes and cheek dots; the star on its badge lights up magenta. |
| 4.6 to 6.0 s | Cross-fade to the end card: lockup and "New bounties loading…". |

## Source ad it converts

- **Source:** Gray Swan Arena A1, an organic video post on X from @GraySwanAI (5.04 s, 968 x 720, about 4:3, 24 fps,
  no audio), posted 2024-12-22 15:52 UTC; paid status unverifiable.
  https://x.com/GraySwanAI/status/1870859897933537359
- **What was kept:** the "…Loading" drop tease, the short three-beat list closed by "Stay sharp.", and the 5 s single
  push-in on a lone mascot on dark water in a foggy night city that turns to the lens and ends on a close-up of its
  face. "Huge prizes to win", "New models to test", the dated tease, the three emoji, the link, the "Video made with"
  credit, the source's tool watermark and every Gray Swan mark are gone.

## Production notes (internal; not ad copy)

- **Frames:** the start plate was generated from the press kit's mark and crew header as references (2 takes, take 2
  chosen, then widened to 16:9); the motion was generated image-to-video at 1080p, 1 take. No real person, place,
  brand or watermark; the neon sign reads "make.fun" in every sampled frame (12 frames across the shot) until the
  push-in blurs it to bokeh.
- **Edit:** `pipeline/convert/gray-swan-arena-kit/vid/build.sh` (ffmpeg): corner lockup, cross-fade into the end card
  (`vid/end-ad3.html`), two-pass H.264 at 8 Mb/s, silent AAC.
