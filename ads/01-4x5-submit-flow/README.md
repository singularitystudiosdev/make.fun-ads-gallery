# Ad 01 (4:5): enter a make.fun bounty, end to end

A 19 s, 1080 x 1350, 60 fps X ad. The whole flow (pick a bounty, hand it to your agent, paste the commit, get
graded, climb the leaderboard, win) is played through make.fun's real frontend in one tweened take.

- `out/final.mp4`: the ad (H.264, AAC, -14 LUFS). `out/poster.png` is its strongest frame and `out/contact.png` its
  contact sheet.
- `docs/x-policy-review.md`: the X Terms of Service and Ads Policies review, clause by clause, read live. The
  creative passes. The landing page has two fails, each with its fix.
- `docs/review_log.md`: five blind-judge critique rounds and the residue below the floor.
- `docs/states.md`: the state list on the beat grid. `docs/brief.md` and `docs/look.md` hold the brief and look plan.

## How it is built

1. `capture/stage.mjs` drives the live dev.make.fun production build in headless Chrome, with every write
   answered locally. The session is staged as `@you`, the entry and its grading are staged, and so is a win
   notification, which makes the site open its own win celebration.
2. `capture/freeze.mjs` walks the flow with real clicks and typing. It freezes each state's hydrated DOM into
   `assets/states.js`, with the site's production CSS and fonts beside it.
3. `index.html`, `film.js` and `stage.js` mount those frozen states under the site's own stylesheet. `seek(t)`
   moves them as a pure function of time: a spring camera, real elements FLIPped, real inputs typed into and lifted,
   real sheets slid.
4. `scripts/render.mjs` (patched with `--dpr`) renders it deterministically. `audio/score.mjs` and
   `audio/cues.mjs` synthesize the music and SFX, and `scripts/mix.mjs` mixes them to -14 LUFS.

```sh
cd capture && npm install && node freeze.mjs && cd ..        # re-freeze from the live site (optional)
node audio/score.mjs && node audio/cues.mjs && node scripts/sfx.mjs docs/cues.json out/sfx.wav --dur 19
node scripts/render.mjs index.html --selector '#film' --out out/silent.mp4 --fps 60 --dur 19 --w 432 --h 540 --dpr 2.5 --sub 1
node scripts/mix.mjs --video out/silent.mp4 --audio audio/track.wav --audio out/sfx.wav --gain -3 --lufs -14 --out out/final.mp4
```
