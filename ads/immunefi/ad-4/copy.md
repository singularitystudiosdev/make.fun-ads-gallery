# Ad 4: "AI agents write software now." (X video ad, 16:9 + 9:16)

## Platform and format
- **Format:** X Video Ad with Website Card, a promoted post from make.fun's own account (@makefunnyai).
- **Files:**
  - `creative.mp4`: 16:9, 1920 x 1080, the feed cut
  - `creative-9x16.mp4`: 9:16, 1080 x 1920, for X's vertical video placement
  - `poster.png` and `poster-9x16.png`: thumbnails matching each video's size
  - `storyboard/`: frames of the final 16:9 cut plus `contact.png`, with the 9:16 sheet as `contact-9x16.png`
- **Specs:** 18.86 s at 30 fps. H.264 High, yuv420p, AAC-LC 48 kHz stereo, +faststart. Mixed to −14 LUFS integrated,
  true peak ≤ −1 dBTP.
- **Captions:** every spoken line is burned in, because X autoplays muted.
- **Logo:** the make.fun lockup stays in the upper-left corner until it becomes the end card.

## Headline (website card headline, 29 characters)
> The best entries win bounties

## Primary text (post text, 196 characters)
> AI agents write software now. Pick a bounty, build it with your agent, and submit the repo with the transcript that wrote it. Every entry is graded in a sandbox, and the best entries win bounties.

- The post text has no URL, no hashtag and no emoji.
- It does not type "make.fun", which X would auto-link as a URL.

## CTA
The website card (the headline and https://make.fun/). If the composer asks for a button label, use "Learn more".
No button is drawn in the film.

## On-screen text (16:9 and 9:16 share the timeline; positions differ per format)

| Time (s) | Text | Style |
|---|---|---|
| 0.00–18.86 | make.fun lockup, top-left. At 12.70 it travels and grows into the end-card lockup. | press-kit `lockup-on-dark.svg`, unaltered |
| 0.00–2.50 | AI agents write software now. | typed word by word with the voice, JetBrains Mono, magenta block cursor |
| 2.58–5.10 | Pick a bounty. | Inter 700 |
| 3.60–5.10 | Build it with your agent. | Inter 700, under the line above |
| 5.15–8.52 | Submit the repo, and the transcripts that wrote it. | Inter 700 |
| 8.58–11.97 | Every entry is graded in a sandbox, the same way, twice. | Inter 700 |
| 9.45–10.45 | run 1 | Inter 700, by the cube |
| 10.50–11.95 | run 2 | Inter 700, pink, by the cube |
| 12.06–12.75 | Introducing | Inter 700, large |
| 13.72–18.86 | Submit solutions. | Inter 700, end card |
| 15.44–18.86 | The best entries win bounties. | Inter 700, end card |
| 17.60–18.86 | Free to enter. | Inter 700, end card |

Every closing period is make.fun magenta, echoing the wordmark's dot.

## Voiceover script (with timecodes)

| Time (s) | Line |
|---|---|
| 0.15–2.34 | AI agents write software now. |
| 2.58–3.45 | Pick a bounty. |
| 3.62–4.68 | Build it with your agent. |
| 5.15–7.72 | Submit the repo, and the transcripts that wrote it. |
| 8.58–11.55 | Every entry is graded in a sandbox, the same way, twice. |
| 12.01–13.57 | Introducing make dot fun. |
| 13.72–14.75 | Submit solutions. |
| 15.44–17.38 | The best entries win bounties. |
| 17.60–18.62 | Free to enter. |

The script is written "make dot fun" so the brand name is spoken correctly. On screen it is always lowercase
`make.fun`.

## Picture (shot list)

| Time (s) | Shot |
|---|---|
| 0.0 | A dense magenta particle sphere turns beside the typed line. |
| 1.72 | The sphere flattens into a ring. |
| 2.58 | Six blank bounty cards form. |
| 3.44 | One card comes forward, and rows of code build inside it. |
| 5.15 | The code packs into a block (the repo) with a ribbon trailing (the transcripts), and a wireframe cube (the sandbox) draws on. In 16:9 the cube is on the left, so it never crosses the caption column. |
| 6.87 | The block and ribbon fly into the cube. |
| 8.58 | The cube takes the frame, turning. |
| 9.5 / 10.55 | Two scan passes; the second lands on "twice". |
| 12.01 | Particles ring the word "Introducing". |
| 12.70 | The lockup travels to the end card, landing on "fun". |
| 12.87 | The particle ring folds into the bounty board beside it, each card holding an entry (rows of code). |
| 15.44 | The best card lights and comes forward, and the board pushes in slowly to the end. |
| 17.15 | The make.fun sparkle forms inside it. |
| 18.01 | The sparkle flares white. |
| 18.86 | The film ends on a downbeat. |

Scene changes land on the music's measured beats (70 BPM): 0.87, 1.72, 2.58, 3.44, 5.15, 6.87, 8.58, 12.01, 12.87,
15.44, 17.15 and 18.01.

## Landing URL
https://make.fun/

## Source ad it converts
- **Source:** Immunefi A4, YouTube brand film "Immunefi: The Security OS for the Onchain Economy" (1:25, 1280 x 720),
  https://www.youtube.com/watch?v=DnGygL4D1pA
- **Kept:** the structure and visual grammar:
  - a typed cold open on black
  - typed or titled lines over a dark magenta particle world
  - a wireframe object at the centre of the story (the padlock globe becomes the sandbox cube)
  - an "Introducing" beat, then the name
- **Dropped:** the skull, "$12,000,000,000", banknotes, archival footage, the crypto thesis, the token payoff, and
  every Immunefi asset, voice and note of music.

## Production notes (internal, not ad copy)
- **Picture:** code-rendered from `pipeline/convert/immunefi-kit/ad4/index.html`, a pure function of time rendered
  frame by frame in headless Chrome (render.mjs). The look plan, shot list and review log are in
  `pipeline/convert/immunefi-kit/ad4/docs/`.
- **Voice:** ElevenLabs TTS, library voice "Eric" (cjVigY5qzO86Huf0OWal, "Smooth, Trustworthy"), model
  eleven_multilingual_v2, speed 0.95.
  - Chosen over a "Brian" take, which read as too halting.
  - One read was cut into eight lines, and a ninth ("Free to enter.") was read separately with the same settings.
  - `audio/place.py` placed all nine on the timeline.
- **Music:** an instrumental bed (dark minimal electronic, 70 BPM measured), generated for this film and trimmed with
  a 1.2 s fade ending at 18.86 s. It has no vocals and no added stings.
- **Mix:** `scripts/mix.mjs`, voice at 0 dB and music at −11 dB, normalised to −14 LUFS with a −1 dBTP ceiling.

## Craft review (internal)
- **Process:** the film went through five rounds with a fresh independent reviewer each round (two still passes, then
  three full renders with sound).
- **Last round's scores:**

  | Hook | Readability | Motion | Variety | Composition | Brand | Sound |
  |---|---|---|---|---|---|---|
  | 6 | 5 | 6 | 6 | 6 | 8 | 7 |

- **Short of the 8 floor:** hook, readability, motion, variety, composition and sound.
- **The main open point:** the 16:9 cut's type is small at phone width, about 17–21 px at 360 px. The 9:16 cut,
  about 28 px, is the one to run on phones.
- **Full log:** every round, the disagreement and the residue are in
  `pipeline/convert/immunefi-kit/ad4/docs/review_log.md`.
- **None of this is a compliance issue.** The X review is in `compliance.md`.
