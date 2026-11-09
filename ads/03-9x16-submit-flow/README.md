# Ad 03 (9:16): enter a make.fun bounty, end to end

An 18 s, 1080 x 1920, 60 fps X ad. The whole flow (pick a bounty, hand it to your agent, paste the link and the
commit, send it in, get scored, climb to first, win) plays on make.fun's real phone frontend, every step a
spring-driven move of the site's own elements, with no cuts.

- `out/final.mp4`: the ad (H.264, AAC, -14 LUFS). `out/poster.png` is its strongest frame and `out/contact.png` its
  contact sheet.
- `docs/x-policy-review.md`: the X Terms of Service and Ads Policies review, clause by clause, read live. The
  creative passes. The landing page has two fails, each with its fix.
- `docs/review_log.md`: five blind-judge critique rounds and the residue below the floor.
- `docs/states.md`: the state list on the beat grid. `docs/brief.md` and `docs/look.md` hold the brief and look plan.

## The idea: the climb

9:16 is a vertical frame and a phone's grammar is vertical, so everything moves up. The make.fun mark docks into the
site's header as the phone rises, the board flings up, the page rises over it, a copy of the prompt leaves up through
the window's top edge to the agent, the site's own bottom sheet rises, the link and the commit drop into their fields,
the status card rises out of the page and ticks, the ranking opens first place and @you rises into it, the win sheet
rises and takes the frame, and the panel condenses back into the mark for the lockup. The caption rides in a band of
the brand's magenta above the phone, never over the UI.

## How it is built

1. `capture/stage.mjs` drives the live dev.make.fun production build in headless Chrome at a 360 x 640 phone
   viewport, with every write answered locally. The session is staged as `@you`; the entry, its scoring, fictional
   rivals and a win notification are staged, which makes the site open its own win celebration.
2. `capture/freeze.mjs` walks the flow with real taps and typing and freezes each state's hydrated DOM into
   `assets/states.js`, with the site's production CSS and fonts beside it. 360 x 640 at 3x is exactly 1080 x 1920.
3. `index.html`, `film.js` and `stage.js` mount those frozen states under the site's own stylesheet. `seek(t)`
   moves them as a pure function of time: a window and a spring camera, real elements risen, dropped and paged, the
   site's own countdown wheels ticking. Every prize amount is removed or redacted; the win panel's prize line,
   per-place amounts and Share on X button are removed; GitHub's logo is hidden.
4. `scripts/render.mjs` (with `--dpr` and `--settle 2`) renders it deterministically. The site's sticky header and
   dock made Chrome composite them and everything over them, and a capture could race those layers' tiles, so
   `stage.js` emulates sticking (relative, offset per frame) and hides every scroll container, leaving one layer. `audio/score.mjs` (E major, 120 BPM, a climbing
   arpeggio) and `audio/cues.mjs` synthesize the music and SFX, and `scripts/mix.mjs` mixes them to -14 LUFS.
   `tools/` holds the measuring and frame-grab helpers used to build it.

```sh
cd capture && npm install && node freeze.mjs && cd ..        # re-freeze from the live site (optional)
node audio/score.mjs && node audio/cues.mjs && node scripts/sfx.mjs docs/cues.json out/sfx.wav --dur 18
node scripts/render.mjs index.html --selector '#film' --out out/silent.mp4 --fps 60 --dur 18 --w 360 --h 640 --dpr 3 --sub 1 --settle 2
node scripts/mix.mjs --video out/silent.mp4 --audio audio/track.wav --audio out/sfx.wav --gain -3 --lufs -14 --out out/final.mp4
```
