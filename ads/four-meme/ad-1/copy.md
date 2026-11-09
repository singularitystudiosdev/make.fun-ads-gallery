# Ad 1: "New bounties, same agent."

## Platform and format
- X Promoted video, 16:9, 1920x1080, 24 fps, 29.9 s (718 frames), H.264 High yuv420p, ~7.2 Mbps, AAC LC 48 kHz stereo, +faststart. Music only.
- Loudness: -14.0 LUFS integrated, true peak -1.85 dBTP.
- Extra cut: `creative-1x1.mp4`, 1080x1080, same length, same audio, same loudness (square re-frame: tighter crops, the opening pans across the three worlds, two-line hook, text re-laid). Poster: `poster.png` (1920x1080).

## Headline
Pick a bounty. Your agent builds it.

## Primary text
New bounties, same agent. Build it, submit it, get graded.

## CTA
Learn more

## On-screen text (in order, with timecodes; sentence case)
| Time | Text |
|---|---|
| 0:00.35 to 0:01.25 | make.fun lockup (real press-kit file `lockup-on-dark-2400.png`, untouched, 210 px tall) fades in over the dusk sky |
| 0:01.2 to 0:03.7 | "New bounties. Same agent." (Inter Display Bold, white, centred; solid from 0:02.1, fades with the cut to the vault) |
| 0:03.7 to 0:24.9 | no text: the three worlds (vault, sticker, billboard) play as pure picture |
| 0:25.1 | "Pick." (Inter Light, #D4D4D4 on Night #000000) |
| 0:25.6 | "Pick. Build." |
| 0:26.1 to 0:27.3 | "Pick. Build. Submit." |
| 0:27.75 to 0:29.9 | make.fun lockup (on-dark, untouched, 210 px tall) |
| 0:28.3 to 0:29.9 | "Free to enter." (Inter, 46 px, #C5C5C5) under the lockup |

No legible text appears inside any scene: the vault door, the sticker and the billboard face are blank on purpose.

## Voiceover script
None (music only).

## Landing URL
https://make.fun/

## Source ad it converts
X3 "New worlds, same hand." (four.meme brand film, 33 s, music only), https://x.com/fourdotmemezh/status/2114988606351868336. Kept: the format and arc: a cinematic single-character journey through three distinct worlds, a touch that sets light running along each world's seams, a wide closing shot of the worlds glowing behind the walking character, and a black end card with a thin three-beat imperative ("Pick. Build. Submit.") and a short orchestral-electronic score. Nothing further is carried over: the character, the worlds, the palette (magenta instead of green), the music and the words are all make.fun's own.

## Production notes
- Character: the make.fun ghost from the press kit, cut from the approved model sheet (`kit/cast/ghost-sheet.png`, made with gpt-image-2.5-sunburst from the press-kit header and mark) plus a second pose sheet generated from that sheet (back views with an arm raised, a walk step, a three-quarter look-back, a profile). Each pose was cut to a transparent sprite and checked against the sheet (same eyes, one magenta cheek dot, thick outline, stubby arms, scalloped base). The ghost carries nothing: no badge, no props. The badge appears inside the untouched lockup file on the cards, and nowhere further.
- Worlds: four still plates (dusk plain with the three worlds far off; steel-and-stone vault hall; paper-hill landscape with a giant blank die-cut sticker, its corner curling; blue-hour highway with a blank billboard). Every surface was prompted blank; all legible text is set by us in Inter in headless Chrome.
- Story beats: vault (the ghost walks in, back to camera, presses its arm to the door; magenta light runs round the door's rings and spokes; the door stays shut); sticker (the ghost lifts the curling corner; light runs along the die-cut edge); billboard (the ghost taps the leg; light climbs the leg and traces the frame; the blank face glows softly); payoff (the ghost, large in the foreground, looks back over its shoulder at the three worlds as they light up, a small nod, then walks on toward the horizon; fade to black).
- Method: the film is composited deterministically in Python (numpy + PIL): a camera move on each plate (eased dolly/pull-back, the same transform applied to the ghost), the ghost as a flat 2D sprite with a step cycle, bob and squash, contact shadow and a faint floor reflection, the magenta light drawn as animated strokes on the world's own seams with a soft bloom, a gentle magenta wash and a slight dim so the light reads, dust motes, vignette and light grain. All light changes ramp over at least 12 frames; there is no flash, strobe or white frame; scene-to-scene cuts are 12-frame dips.
- Music: Lyria (instrumental, no vocals, no named artist or film), second take with a structured prompt (quiet dusk opening, low pulse, plucked arpeggios, three rising waves to a peak near 22 s). In post the bed is eased down about 6 dB from 24.5 s and fades to the end so it resolves under the end card; no sting. Mastered to -14 LUFS / -1 dBTP.
- Re-render: scripts are in `pipeline/convert/four-meme-kit/ad1/tools/` (`render.py` for frames, `AR=sq` for the square cut; `encode.sh` for the encode and loudness mix with the repo's `mix.mjs`). Frames go to `ad1/frames` (16:9) and `ad1/framesq` (1:1).
- Judgement calls: (1) the star-badge prop and badge payoff were dropped (manager note); the payoff became the look-back and walk-on; (2) the three worlds are shown as places, never as UI, and no bounty title or detail is named, so the ad stays true after any one bounty closes (the manager's upload-day precondition still applies: the bounties it depicts must be live); (3) mid-film supers were left out, so the hook and the end card carry the message for muted viewers; (4) "Free to enter." is the end-card line, taken from make.fun's own wording; (5) in the 1:1 cut the vault's glow is partly outside the payoff crop.
