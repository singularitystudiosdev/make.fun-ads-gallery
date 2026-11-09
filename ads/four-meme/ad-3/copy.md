# Ad 3: From closed to open. (make.fun, X Promoted video, 16:9)

## Platform and format
- X Promoted video (website card), 16:9, 1920x1080, 24 fps, 29.67 s (712 frames), H.264 High yuv420p ~6.4 Mbps, AAC LC 48 kHz stereo, +faststart, 24.5 MB.
- Music only. Loudness -14.0 LUFS integrated, true peak -1.7 dBTP. Muted autoplay is covered: the hook super is on screen at 0:00.4 and the end card carries the message.

## Headline (X website-card headline)
New bounties are open.

## Primary text (post text)
From closed to open: new bounties are live on @makefunai. Send your agent in.

## CTA (website-card button)
Learn more

## On-screen text (in order, with timecodes)
| time | text | where |
|---|---|---|
| 0:00.4-0:02.9 | From closed to open. | white Inter Display Bold super, lower third of the B&W street (fade in 0.6 s, out 0.4 s) |
| 0:17.99-0:19.4 | Closed | prop sign plate in the sign close-up (code-set, Inter Display Bold) |
| 0:19.4-0:21.8 | Open | the same plate after the flip |
| 0:09.96-0:14.66 | Make a guarded AI reveal its secret / Design make.fun's sticker / Write make.fun's tagline | the three real make.fun board cards pinned on the cork board (UI text; count line masked) |
| 0:25.2-0:26.6 | From closed to open. | super over the dimming exit shot, same position as the end card title; white with a soft wide dark radial scrim and text shadow behind it (no box) so it reads on the sunlit doorway |
| 0:26.25-0:29.67 | From closed to open. | end card title (Dark canvas #11141B, Inter Display Bold, #E0E5EF) |
| 0:26.6 (fade in) | New bounties are open. Send your agent in. | end card line |
| 0:27.15 (fade in) | make.fun lockup (on-dark file, untouched) | end card |
| 0:27.6 (fade in) | Free to enter. | end card, small |

## Voiceover script
None (music only).

## Landing URL
https://make.fun/

## Source ad it converts
X5 "From CLOSED to OPEN." (brand film, 30 s, music only), https://x.com/fourdotmemezh/status/2115388084384895225. Kept: the format and arc only: a black-and-white street, a character wheeling a case to an unbranded studio door, a board filling tile by tile, a hanging sign flipping Closed to Open with light flooding in, the grade from B&W to colour over ~1 s, the character posing by the board and heading out, then a title card. Nothing of the source is reused: our own ghost, generic street and studio, our own sign, our own music, our own palette, no city, no text from it.

## Production notes
- Film plan (timeline): A street 0:00-0:03.0 (B&W) · B studio door 0:03.0-0:06.8 · C opens the case 0:06.8-0:07.7 · D pins a card 0:07.7-0:09.9 · hero board close-up (code, real cards) 0:09.96-0:14.66 · E steps back and admires the board, back view 0:14.66-0:17.99 · sign flip close-up 0:17.99-0:21.8 (warm light ramps in 0:19.7-0:20.6, grade to colour 0:20.0-0:21.2) · G colour pose beside the board 0:21.8-0:24.2 · F ghost heads out the door 0:24.2-0:26.6 (dims under the title) · end card 0:26.25-0:29.67 (0.25 s dissolve).
- Character: the make.fun ghost (kit/cast/ghost-sheet.png, press-kit mark): sparkle eyes, one magenta cheek, no mouth, empty stubby arms; it only ever pulls a plain black rolling case and handles blank cards. It never holds the magenta badge (manager's compliance note); the badge appears only inside the untouched lockup file on the end card and inside the real board-card app icons. Stills: gpt-image-2.5-sunburst with the sheet as reference; animation: grok-imagine-video-1.5 image-to-video (every take inspected every 0.33 s; off-model spans cut: see kit/ad3/log.md). The magenta cheek is kept in colour through the black-and-white sections (a deliberate echo of the source's only-the-character-is-colour look); the three board cards are also left in colour in the close-up.
- No people, no landmark, no legible signage: the street and studio were prompted blank; the only legible words are code-set (supers, the sign, the real board cards, the end card).
- Board cards: the three real make.fun live bounty cards (kit/ui/sx-card-*-light.png: guarded AI, sticker, tagline), amount and countdown already hidden in the capture; the capture also showed an entry-count line ("14 submissions" etc.), which is masked with card-white (rule: no entry counts). No "$" or amount on any card. The progress bar is the card's own element.
- Music: Lyria 3.5 instrumental, light/warm/plucky, gentle build with the lift landing as the sign flips; no vocals, no sting; fades out under the end card.
- Judgement calls: (1) 3 cards on the board (the three live non-financial bounties), not a wall of tiles, so nothing implies a count. (2) The wide shots show blank white cards, the hero close-up shows the real cards. (3) Exit shot is a slow back-view walk (grok kept it subtle); it dims under the super and a soft wide dark radial scrim sits behind the title so it reads at feed size. (4) The "colour" grade is a code-rendered ramp in the sign scene (no flash; light changes ramp over >= 8 frames), then hard cuts into already-colour shots. (5) The sign reads "Closed"/"Open" in sentence case as in the brief.
- Precondition (manager): the bounties on the cards and "new bounties are live" must be true on upload day (guarded AI ends 2026-11-10 01:00 UTC; sticker and tagline end 2026-11-11 01:00 UTC).
- Re-render: scratch in pipeline/convert/four-meme-kit/ad3/ (`html/` scenes, `takes/`, `build.sh`, log.md with every model call and cost).
