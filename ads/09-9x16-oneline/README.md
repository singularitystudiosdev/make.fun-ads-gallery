# Ad 09 (9:16): one line, a make.fun bounty end to end

A 15 s, 1080 x 1920, 60 fps X ad. The whole flow (pick a bounty, hand it to your agent, submit an entry, paste the
link and the commit, send it in, aim for first, win) plays on make.fun's real phone frontend, edge to edge under a
caption band, and one magenta line runs through all of it without lifting.

- `out/final.mp4`: the ad (H.264, AAC, -14 LUFS). `out/poster.png` is its strongest frame and `out/contact.png` its
  contact sheet.
- `docs/x-policy-review.md`: the X Terms of Service and Ads Policies review, clause by clause, read live on
  2026-11-09. The film passes its rows except the staged win with no "demo" label, kept by the user's standing
  decision for this series. The landing page fails its rows (the beta pop-up, USDC and trading content without shown
  financial certification, relevance): do not run the ad until those are fixed.
- `docs/review_log.md`: the blind-judge critique rounds, what each changed, and the residue.
- `docs/states.md`: the state list on the beat grid. `docs/brief.md` and `docs/look.md` hold the brief and look plan.

## The idea: one line

Ads 01-07 used a morph, a relay, a climb, a dive, a loupe, a sticker and a split-flap. This one is a single stroke of
the brand's magenta with a white keyline, drawn from before the first frame to the last and never lifted. It is the
hand in the film: its head lassoes what you tap and presses it, and the line it leaves is laid on the surface it was
drawn over, so it rides that surface when it moves and wears away behind the head. It is also a rope:

- Frame 0: the line is already looping the site's own "You won 1st place" under "Bounties you can win." It pulls the
  loop tight, holds it a second, and throws the win sheet down out of the frame; the board is under it.
- It lassoes "Close a month of books into a ledger that reconciles" and taps the card; it dives off the frame's foot
  and the bounty page comes up over the board, the head coming back in from the left to underline its title.
- It loops Copy for your agent and taps it, hooks the prompt's end and leaves through the frame's right edge, toward
  the agent.
- It comes back in from the agent's side, taps Submit an entry and Submit it yourself, and loops each field of the
  form: its sweep along the field's bottom edge writes the link, then the commit, into the real fields as it passes.
- It loops Submit entry and taps it, underlines "Checks are running." on the receipt, and drags the sheet away.
- It runs under the tabs and the site's own underline runs after it to Leaderboard; it lassoes @you's row, third, and
  hauls it up by its left end past both rivals to first, the ranks changing as it passes, the camera closing on
  first place.
- The site's win sheet rises; the line underlines "You won 1st place" and rings the win's mark as the camera pushes
  in; ink runs down over the frame, the mark is carried to the end card inside its ring, and the line keeps circling
  it to the last frame over the make.fun wordmark and "Win bounties."

## Quality

Five blind-judge rounds (a fresh judge each time, pixels only; floor 8 on every axis). Round 5, judged on the final
60 fps render with its mix: hook 7, readability 6, motion 6, variety 6, composition 5, brand 7, sound 7. Brand reached
8 in rounds 2 and 4 and sound in round 2; the floor was not cleared in one round. Round 5's execution finding (a
stroke crossing @you's row before the haul) was fixed after the round and re-rendered, not re-judged; its two shot
findings (the end card's hold, a near-still second after the line leaves for the agent) are residue.
`docs/review_log.md` has every round, what each changed, and what would be tried next.

## How it is built

1. `capture/stage.mjs` drives the live dev.make.fun production build in headless Chrome at a 360 x 640 phone
   viewport, with every write answered locally. The session is staged as `@you`; the entry, its scoring, fictional
   rivals and a win notification are staged, which makes the site open its own win celebration.
2. `capture/freeze.mjs` walks the flow with real taps and typing and freezes each state's hydrated DOM into
   `assets/states.js`, with the site's production CSS and fonts beside it (a fresh capture for this ad, 2026-11-09).
   360 x 640 at 3x is exactly 1080 x 1920.
3. `index.html`, `film.js`, `stage.js` and `line.js` mount those frozen states under the site's own stylesheet.
   `seek(t)` is a pure function of time. The line (`line.js`) is a head on a time spline through keyframes, each
   pinned to a surface (the frame, a page under its camera, a sheet, a ranking row, the end card's mark, the card);
   its tail at t is the head's path over the last 0.55 s, each point re-mapped through its surface's transform at t,
   and each surface's stretch of line is drawn in its own SVG layer just above that surface, so a page sliding over
   another covers the line beneath. Lassoes are superellipses that hug their targets. Every prize amount and payout
   word is removed (see `assets/README.md`); sticky elements are emulated so the page is one drawing layer.
4. `scripts/render.mjs` (`--dpr 3 --settle 2`) renders it deterministically on a software rasterizer (its paint and
   capture timeouts are raised to 4 s and 300 s for this ad: the Mac rendered under heavy shared load);
   `scripts/prender.mjs` runs it in parallel spans (losslessly) and encodes the joined frames once. `audio/score.mjs`
   synthesizes the music (G major, 120 BPM: G D Em C | Am D | a half bar of C, the end on a held G add9 at 13 s),
   `audio/cues.mjs` writes the SFX cue sheet, `scripts/sfx.mjs` synthesizes it (two voices added for this ad: `zip`,
   a fast pen stroke, and `cinch`, a loop pulled tight), and `scripts/mix.mjs` mixes everything to -14 LUFS.
   `tools/` holds the measuring, frame-grab, layer and money-word sweep helpers.

```sh
cd capture && npm install && node freeze.mjs && cd ..        # re-freeze from the live site (optional)
node audio/score.mjs && node audio/cues.mjs && node scripts/sfx.mjs docs/cues.json out/sfx.wav --dur 15
node scripts/prender.mjs --jobs 5 --spans 30 --parts out/parts60 --out out/silent.mp4 -- index.html --selector '#film' --fps 60 --dur 15 --w 360 --h 640 --dpr 3 --sub 1 --settle 2
node scripts/mix.mjs --video out/silent.mp4 --audio audio/track.wav --audio out/sfx.wav --gain -3 --lufs -14 --out out/final.mp4
node tools/sweep.mjs 0.05                                    # every on-screen money word, frame by frame (expect none)
```

## Final render and determinism

`out/final.mp4`: 1080 x 1920, 60 fps, 900 frames, 15.0 s, H.264 CRF 16 (`--sub 1`, no motion blur), AAC; mixed to
-14.05 LUFS integrated, true peak -1.57 dBTP. `out/poster.png` is 0.62 s (the loop round "You won 1st place" under
"Bounties you can win."); `out/contact.png` is the final's contact sheet. The whole film was rendered in 30 half-second
spans, losslessly, joined and encoded once. Four spans were rendered a second time on their own at the same settings and
their decoded frames compared by framemd5 against the final's lossless parts: 0.5-1.0 s (the hook's loop held taut,
the hook caption leaving), 5.0-5.5 s (the camera on the link's field, the pen writing the link), 9.0-9.5 s (the loop
pulled tight on @you's row, the haul past @ledger-pete) and 13.5-14.0 s (the end card, the ring and the push): 120 of
120 frames identical. `tools/sweep.mjs 0.05` on the final source: no money or payout word in any frame.
