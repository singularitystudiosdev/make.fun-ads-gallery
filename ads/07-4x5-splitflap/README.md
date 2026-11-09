# Ad 07 (4:5): split-flap, a make.fun bounty end to end

A 15 s, 1080 x 1350, 60 fps X ad. The whole flow (pick a bounty, hand it to your agent, paste the link and the
commit, send it in, land first, win) plays on make.fun's real phone frontend, full-bleed under a split-flap caption
board, and every change of screen is the screen turning over like a split-flap display.

- `out/final.mp4`: the ad (H.264, AAC, -14 LUFS). `out/poster.png` is its strongest frame and `out/contact.png` its
  contact sheet.
- `docs/x-policy-review.md`: the X Terms of Service and Ads Policies review, clause by clause, read live on
  2026-11-09, with the author's response on the final cut.
- `docs/review_log.md`: five blind-judge critique rounds, the fixes, the determinism proofs and the residue.
- `docs/states.md`: the state list on the beat grid. `docs/brief.md` and `docs/look.md` hold the brief and look plan.

## The idea: split-flap

Ads 01-06 used a morph, a relay, a climb, a dive, a loupe and a peel. This one is a departure board that updates:

- The captions sit on an 88 px board of 2 x 12 tiles on the brand's magenta (ink tiles for letters, faint recesses
  for blanks). Each change is two quick flaps of all its tiles, old to blank and blank to new: "Bounties you can win." / "Pick a bounty." /
  "Hand it to your agent." / "Paste the link." / "And the commit." / "Send it in." / "Aim for first." / "Win the
  bounty." / "Win bounties."
- The phone's screen is one big flap. Every tap that changes the page sinks the screen into the board as a card (the
  board's magenta around it), turns it over on its hinge in perspective, the old top half falling toward the viewer
  and its back, the new bottom half, coming down with a clack, and sets it back down full-bleed. The sheet turns the
  other way, rising from the foot.
- Smaller units lift off the page toward the viewer as they turn: Copy for your agent flips to Copied; the link field
  turns over with the link in it and holds big for a moment; the form's lower part turns over to the Commit field the
  site inserts, the commit in it; the ranking's rows turn and @you is first.
- Frame 0 is close on the site's own win panel ("You won 1st place", its confetti already flying). The win comes back
  at the end, wide, with the places under it, and the last turn lands on the brand's magenta, where the site header's
  mark sits over its wordmark and turns over once like a tile.

## Quality

Five blind-judge rounds (a fresh judge each time, pixels only; floor 8 on every axis). Round 5, judged on the final
render: hook 8, readability 6, motion 6, variety 6, composition 6, brand 8, sound 7. The floor was not cleared; round
5's two execution findings (a doubled focus ring during the link's flap, a slow start to the ranking's flap) were fixed
after the round and re-rendered, not re-judged. `docs/review_log.md` has every round and the residue, with what would
be tried next. Determinism: four spans re-rendered alone match the final frame for frame.

## How it is built

1. `capture/stage.mjs` drives the live dev.make.fun production build in headless Chrome at a 360 x 362 phone
   viewport (portrait, the screen under the board), with every write answered locally. The session is staged as
   `@you`; the entry, its scoring, fictional rivals and a win notification are staged, which makes the site open its
   own win celebration.
2. `capture/freeze.mjs` walks the flow with real taps and typing and freezes each state's hydrated DOM into
   `assets/states.js`, with the site's production CSS and fonts beside it (a fresh capture for this ad, of a newer
   build than ads 01-06). `capture/inline.mjs` inlines the states' images as data URLs and pins the stylesheet's media
   to the touch phone the capture ran as.
3. `index.html`, `film.js`, `stage.js` and `flap.js` mount those states under the site's own stylesheet. `seek(t)` is
   a pure function of time. A turn (`Cascade` in `flap.js`) paints the old and the new state at the turn's two ends,
   copies each whole screen, and shows them through windows: the new picture where it is uncovered, the falling face
   and its back in perspective (`rotateX` under `perspective()`), a hairline at the hinge and the flap's shadow; a
   lifted turn scales the whole card down onto the magenta, a lifted unit scales up toward the viewer with a shadow.
   No two turns overlap and no camera moves during one (`docs/events.json` lists each turn's span). The caption board (`TileBoard`) is closed-form per tile. Every prize amount is removed or redacted;
   the dock's money line, the ranking's "Reward" header and "top 10 paid", the win panel's prize line, per-place
   amounts, Share on X and View payout are removed; GitHub's logo is hidden. Sticky elements are emulated.
4. `scripts/render.mjs` (`--dpr 3 --settle 5`, with `MOTION_REEL_SOFTWARE_COMPOSITING=1`: the flaps' perspective
   faces are composited layers, and Chrome's CPU compositor draws them bit-identically run to run where the GPU path
   did not) renders it deterministically;
   `scripts/prender.mjs` runs it in parallel spans (losslessly) and encodes the joined frames once. `audio/score.mjs`
   synthesizes the music (D major, 120 BPM: D A Bm G | Bm A, a half bar of A, a held D add9 under the end card from
   13 s). `tools/events.mjs` exports every flap landing, tile, tap and burst from the film itself,
   `audio/cues.mjs` turns them into the SFX cue sheet, `scripts/sfx.mjs` synthesizes it (two voices added for this
   ad: flap and clack), and `scripts/mix.mjs` mixes everything to -14 LUFS. `tools/` holds the measuring, frame-grab,
   layer and money-word sweep helpers used to build it.

```sh
cd capture && npm install && node freeze.mjs && node inline.mjs && cd ..   # re-freeze from the live site (optional)
node audio/score.mjs --dur 15 && node tools/events.mjs && node audio/cues.mjs
node scripts/sfx.mjs docs/cues.json out/sfx.wav --dur 15
MOTION_REEL_SOFTWARE_COMPOSITING=1 node scripts/prender.mjs --jobs 6 --spans 30 --parts out/parts60 --out out/silent.mp4 -- index.html --selector '#film' --fps 60 --dur 15 --w 360 --h 450 --dpr 3 --sub 1 --settle 5
node scripts/mix.mjs --video out/silent.mp4 --audio audio/track.wav --audio out/sfx.wav --gain -3 --lufs -14 --out out/final.mp4
node tools/sweep.mjs 0.05                                    # every on-screen money word, frame by frame (expect none)
```
