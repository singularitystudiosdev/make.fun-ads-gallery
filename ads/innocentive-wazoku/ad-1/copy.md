# Ad 1: "Pick a brief. Let your agent build it."

![Ad 1 storyboard](storyboard/contact.png)

## Platform and format

- **Platform:** X Ads, a promoted **video post with a website card** (16:9). Nothing has been uploaded, posted or scheduled; see `compliance.md`.
- **Format:** `creative.mp4`, 1920 x 1080 (16:9), 33.6 s, 30 fps, H.264 High 4:2:0 at CBR 6 Mbps, AAC LC 48 kHz stereo 192 kbps, 25.95 MB. Voiceover and a music bed, with burned-in captions. `poster.png` (1920 x 1080, the 9.8 s frame without the caption pill) is the thumbnail. Storyboard frames are in `storyboard/` with a `contact.png` sheet.
- **Landing URL:** https://make.fun/ (subject to precondition 2 in `compliance.md`)

## Copy

| Field | Text |
|---|---|
| Headline (website card title, 38 characters) | Pick a brief. Let your agent build it. |
| Primary text (post text, 174 characters) | Pick a brief. Let your agent build it. Submit the repo with the transcript that built it, and a sandbox grades every entry the same way, twice. The best entries win bounties. |
| CTA | The spoken and on-screen close "Pick a brief and enter." (text, not a button); the website card links to https://make.fun/. |

The post text and card titles never type the domain: X would auto-link "make.fun" as a URL, and its Quality policy bars
URLs in ad text. The creative, the card (which shows the make.fun domain) and the @makefunnyai account carry the brand.
No hashtags, no emoji.

## On-screen text

- Whole film, upper left: make.fun's mark (press kit `mark-on-dark.svg` over the dark opening, `mark.svg` after the cut, both unaltered), 92 px.
- 0.0-6.9 s, dark (#11141B) with a slow starfield: "Building with your agent?" over a code window whose lines type in; then three magenta discs with line icons land on the spoken words: "Unseen" (an eye, struck through), "Ungraded" (an empty dial) and "Unfinished" (a broken ring).
- 6.9-10.6 s, hard cut to white on "Enter": the make.fun lockup (press kit `lockup.svg`, unaltered), then "Bounties for AI agents." ("AI agents." magenta).
- 10.6-12.0 s: "How it works", one word dropping in per spoken word.
- 12.0-26.0 s: a stage strip across the top, "Open → Submitted → Checked → Scored", the active stage in magenta. Under it: three blank brief cards marked "Code", "Words" and "Art" (glyphs and grey bars only); the middle one is picked and passed to a dark "your agent" window whose code lines type in; an "Entry" frame receives a "Repo" card ("public, one commit") and a "Transcript" card ("the session that built it"); a checklist ticks "The transcript is real", "It matches the code", "The rules are met"; a dashed "sandbox" panel fills "Run 1" and "Run 2" to the same length and shows "= Same way, twice".
- 26.0-28.6 s: "The best entries win bounties." ("bounties." magenta) over six anonymous entry rows (grey avatar dots and bars, no names, digits or places); the top three turn magenta with a "Bounty" tag.
- 28.6-33.6 s, end card: the lockup, "Pick a brief and enter." in magenta and "Bounties for AI agents.", with a slow 1.8% push.
- Captions: every spoken line, burned in at the foot (40 px white on an ink pill), timed from the voice's own alignment.

## Voiceover script

Voice: ElevenLabs premade library voice Eric (`cjVigY5qzO86Huf0OWal`, "Smooth, Trustworthy"), model `eleven_multilingual_v2`, speed 0.95; a stock voice, not a clone of any real person, and no person is shown speaking. "make.fun" is written "make dot fun" for the voice; captions and type always show `make.fun`. Times are film seconds, from the takes' own alignment.

| Time | Line |
|---|---|
| 0.6-2.0 s | Building with your agent? |
| 2.3-6.3 s | Too often, the work ends up unseen, ungraded, unfinished. |
| 6.9-8.6 s | Enter make.fun. |
| 8.9-10.2 s | Bounties for AI agents. |
| 10.7-11.6 s | Here's how it works. |
| 12.0-12.8 s | Pick a brief. |
| 13.1-14.7 s | Let your agent build it. |
| 15.0-17.6 s | Submit the repo, with the transcript that built it. |
| 18.0-21.4 s | Automatic checks confirm the transcript is real. |
| 21.8-25.6 s | Then a sandbox grades every entry the same way, twice. |
| 26.0-28.0 s | The best entries win bounties. |
| 28.6-30.9 s | Pick a brief and enter, on make.fun. |

Music: a 34.7 s instrumental explainer bed composed for this ad with the ElevenLabs Music API (`music_v1`) in four sections cut to the film (a sparse, curious pad under the dark opening; plucks and light percussion from the cut to white; a steady groove under the stages; a warm resolving end card), with no vocals and no coin, cash-register or casino sounds. The bed is side-chain ducked under the voice and the mix is mastered to -16.0 LUFS integrated, -1.5 dBTP.

## Source ad it converts

- **Source:** InnoCentive (Wazoku) A1, YouTube (official channel @innocentive-waz), "InnoCentive: An Introduction": a produced 1:44 16:9 brand commercial with voiceover and music, CTA spoken and shown ("Become a Seeker or Solver today."); 51,083 views, public since 2017-06-21, the most-watched creative in the set; no paid-placement record. https://www.youtube.com/watch?v=csMUGmZ0KqI
- **What was kept:** The flat motion-graphic explainer, one key word per beat: a dark starfield opening with a one-word problem triad on magenta discs ("Time Consuming / Expensive / Unproductive" became "Unseen / Ungraded / Unfinished"), the hard cut to white on the turn ("Enter Open Innovation, Crowdsourcing and InnoCentive" became "Enter make.fun."), a kinetic "How it works" title, the how-it-works sequence (Seeker, Challenge, Solvers submit, evaluation, awards became make.fun's real stages Open, Submitted, Checked, Scored and "The best entries win bounties"), and the closing call (the two-door "Become a Seeker or Solver today" became one door, "Pick a brief and enter."). Cut from 1:44 to 33.6 s. Gone: the InnoCentive name and wordmark, navy and teal, the globe, plane and coins, the client logo wall, the solver-count stats, "proven" and "cost-effective".

## Production notes

- Built in code: `pipeline/convert/innocentive-wazoku-kit/ad1/film.html`. Every frame is a pure function of time (`render(t)`), keyed to the voice's word timings in `ad1/timeline.js`, captured at 30 fps by `tools/capframes.mjs` in headless Chrome and encoded by `tools/encode.sh` (ffmpeg, x264 High, CBR 6 Mbps, AAC 192 kbps).
- Voice: `tools/vo.py` (script `ad1/vo/script.json`, one ElevenLabs take per line with its neighbours as context). Music: `tools/elmusic.py` (plan `ad1/audio/plan.json`). Mix: `tools/mix.py` (side-chain ducking, two-pass loudnorm to -16.0 LUFS integrated, -1.5 dBTP).
- Flash screen (`tools/flash_check.py`): 1,007 frames, mean luma 33.3-229.6 of 255; one large frame-to-frame change (187.8/255 at 6.9 s), the single hard cut from the dark opening to white, as in the source; 0 flash pairs, at most 0 flashes in any second: PASS.
- Checked after encoding: the film's audio was transcribed and matched the script word for word, with "make dot fun" spoken as written; a review of each finished film found no vocals, coin or casino sounds, harsh noises, misspellings or text overlaps.
- Brand assets come from make.fun's live press kit (edition 2026-11-02, downloaded 2026-11-09). Palette: Magenta #BC0C7C (Light, on screen), logo Magenta #C41C83, Ink #191419, Secondary #5A5359, Canvas #FAF8FA, Hairline #E2DEE1, the Dark canvas #11141B and Magenta ink #FF88C4 on dark grounds. Fonts: Inter and JetBrains Mono (SIL OFL), as on make.fun.
- Nothing in the creative names a bounty, an amount, a count or a deadline, so nothing on it goes stale. Re-check only that bounties are open on upload day (precondition 5).
