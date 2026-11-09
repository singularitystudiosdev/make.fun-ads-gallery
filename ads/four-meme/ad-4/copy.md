# Ad 4 — "Every red check comes with its fix."

## Platform and format
- X Promoted video, 16:9, 1920x1080, 24 fps, 18.625 s (447 frames), H.264 High yuv420p, AAC LC 48 kHz stereo, +faststart, ~6.0 Mbps total.
- Music only (no voiceover). Loudness −13.8 LUFS integrated (target −14), true peak −1.6 dBTP, LRA 5.5 LU.
- File: `creative.mp4`. Poster: `poster.png` (frame at 0:00.9). Storyboard: `storyboard/01.png … 10.png` + `contact.png` (every 0.5 s, timecoded).

## Headline
Failed a check? Fix it and resubmit.

## Primary text
A red check isn't the end. On @makefunai the status card lists the fix, and you can resubmit until the deadline.

## CTA
Learn more

## On-screen text (in order)
Everything below is set in code (Inter, or the site's own frozen UI), never by an image model.

| Time | Text |
|---|---|
| 0:00.3 – 0:03.4 | Super, lower right, Inter Display Bold white, sentence case: "A red check / isn't the end." |
| 0:00.3 – 0:03.4 and 0:11.0 – 0:14.3 | Small label on a dark pill, lower right: "Example entry" (the entry on the phone is staged sample data) |
| 0:00 – 0:03.5 | On the phone, the real make.fun entry status card in its Rejected state (production frontend, staged): "Rejected" · "One check failed, so this entry was not scored." · "What happened" · "Transcripts rebuild the code" · "The transcripts account for too few of the counted lines, and none of the entrypoint." · "What to do now" · "Upload the sessions that wrote the code, the entrypoint included (files with no agent evidence: src/main.py). Then submit again before the deadline." · "Resubmit by Nov 11, 1:00 AM." · "6 checks passed" · button "Fix and resubmit" · stages "Open – Until Nov 11", "Submitted – Nov 8", "Checked – 1 check failed", "Scored". (The last two stage rows are removed from the card.) |
| 0:11.0 – 0:14.1 | On the phone, the same card Checked: "Checked" · "Your entry passed its checks and scoring is under way." · "Final scores after Nov 11" · "No action needed" · stages Open, Submitted, Checked "Scoring under way", Scored. Dissolves at 0:13.1 – 0:13.5 to the Scored state: "Scored" · "Your entry is scored, and final scores are posted after the deadline." · Checked "8 checks passed". (The last two stage rows removed.) |
| 0:14.9 – 0:18.6 | End card on Night canvas #000000, thin white Inter (300): "Every red check comes with its fix." (fades in 0:14.9) then "Resubmit until the deadline." (0:15.8) then the make.fun lockup, on-dark file, untouched (0:16.7) |

## Voiceover script
None (music only).

## Landing URL
https://make.fun/

## Source ad it converts
X6 "Every dark night gives way to dawn." — https://x.com/fourdotmemezh/status/2115051353521488334 (brand film, 18 s, music only, black-and-white backstage vignette). Kept: the 16:9, ~18 s, music-only arc (phone held up → slump → resolve → work at it → a light comes up → a one-line end card on black), the black-and-white world where the character carries the colour, and the thin-white-type end card. Nothing of four.meme's footage, mascot, scene, props, palette or music is used; the setting is a generic empty rehearsal room.

## Production notes
**Character / cast.** The make.fun ghost (`kit/cast/ghost-sheet.png` + `mark-1024.png` as references on every still), as a flat 2D cartoon in a photographic black-and-white room, two sparkle eyes, one magenta cheek dot. Per the compliance note, the ghost never holds the magenta star badge; its arms are empty or holding the phone and the laptop. The badge shows up inside the untouched lockup file, nowhere else. Phone and laptop are generic (no logo, no notch, no marks). The one thing the model drew on the phone was a flat green key: every word on it is the real UI composited afterwards. No people.

**Real UI.** The card is the real production frontend (`https://dev.make.fun`, the live `makefun-tagline-01` slug), driven by a copy of `ads/01-4x5-submit-flow/capture/stage.mjs` (`kit/ad4/capture/`) whose `statusOf` returns, in the shape the bundle renders (`stage: "rejected"`, `checks[]` with one `status: "fail"` + `fix`, `problem.retry`, `next_steps[0].action: "resubmit"`), a rejected entry, then a `checked` and a `scored` entry. The failed check is the real `thinking_reproduces` check (the site labels it "Transcripts rebuild the code"; its published problem is "Transcripts do not account for the code" and its fix template is "Upload the sessions that wrote the code … the entrypoint included … Then submit again before {deadline}"), with sample reason, sample file name and sample dates. Everything staged is sample data, hence "Example entry". The two stage rows after "Scored" are hidden in the DOM before the screenshot. The dates on the card come from the live tagline bounty (entries close 2026-11-11 01:00 UTC; shown in UTC): re-render if the ad runs after that bounty closes (`capture/card4.mjs`, then `build/build.py`).

**Real colours (read from the production UI's computed styles, 2026-11-09).** A failed check is dark red `#901400` (`stroke-negative`; the dash mark in "What happened" and the dashed ring on the Checked stage). A passed check in the expanded "N checks passed" list is green `#067D4D` (`stroke-positive`, not shown in the film because that list stays collapsed); on the stage rail a done stage is an ink-black disc `#191419` with a white tick, and the one main action is magenta `#C41C83` ("Fix and resubmit"). So the film claims red for the failed check; it makes no green claim, and the passed state is the Checked/Scored card in ink-black ticks. Consequently the "touch of colour" in the passed state is the ghost's magenta cheek (the Rejected card carries the magenta button and the red mark); the film is otherwise black and white.

**Music.** Lyria 3.5, instrumental solo piano: sparse and quiet, a soft string pad blooms under it and the harmony turns major at about 0:11 (as the work light ramps up 0:10.4 – 0:11.0), no hit or sting; trimmed 1.0 s from the generated file so the turn lands with the light, faded out under the end card. Mastered −14 LUFS / −1 dBTP with `ads/03-9x16-submit-flow/scripts/mix.mjs`. Two earlier takes were rejected (one had a loud accent at 0:07, one turned warm at 0:07).

**Light.** The work light is a code grade, not a flash: the room is graded to 62 % brightness through the slump, resolve and typing, then ramps (smoothstep) to full with a soft spotlight lift over 0:10.4 – 0:11.0 (14 frames, largest frame-to-frame mean-luma step in the ramp ≈ 5.5/255). The hardest cut in the film is a 37/255 mean-luma step; the cut out of the bright insert at 0:03.5 passes through a 9-frame dip.

**Shots (24 fps frames).** 0:00 – 1.1 wide, ghost holds the phone (Grok take); 1.1 – 3.5 close insert of the phone (still pushed in with code, card keyed onto the green screen and perspective-matched); 3.5 – 6.5 slump on the road case (Grok take, the opening 1.7 s retimed, then a held push-in because the model closed the ghost's eyes after that); 6.5 – 8.5 close-up, determined (still pushed in); 8.5 – 11.0 types on the closed laptop (Grok take, no legible screen); 11.0 – 12.2 wide, phone with the Checked card; 12.2 – 14.6 close insert, Checked then Scored; 14.6 – 18.6 end card.

**Judgement calls.** (1) The phone card needed a close insert to be legible at 1080p, so the Rejected card gets 2.4 s on screen rather than the brief's 3 s of wide shot. (2) The fix wording follows the site's own template for the transcript check, and the "files with no agent evidence" fragment is a sample file name. (3) The hook super "A red check isn't the end." was added to land the message when muted. (4) The ad shows the Scored state after Checked as the real card's next state ("Scored", "8 checks passed"); no rank, place or amount appears and the card is cropped above its last two stage rows. (5) The end card's thin type is Inter 300, white and #D4D4D4.

**Claims the ad makes and where they are backed.** "Every red check comes with its fix." and "The status card lists each failed check and its fix" — make.fun/how-it-works, Rejected: "The status card lists each failed check and its fix." · "Resubmit until the deadline." — same section: "You can resubmit until the deadline." · A rejected entry "is not scored" — same section: "It replaces Checked when a check fails, so the entry is not scored." · Checked: "Automatic checks confirm the transcript is real and matches the code" (how-it-works, Checked). No claim of passing, winning or a result.

**How to re-render.** `kit/ad4/capture/card4.mjs` (status-card screenshots) → `python3 -I kit/ad4/build/build.py` writes `out/silent.mp4`; `mix.mjs` with `audio/music_final.wav`; re-encode with libx264 high 8 Mbps. Model calls and costs: `kit/ad4/log.md`.
