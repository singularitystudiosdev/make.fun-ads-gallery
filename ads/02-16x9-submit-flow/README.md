# Ad 02 (16:9): enter a make.fun bounty, end to end

An 18 s, 1920 x 1080, 60 fps X ad. The whole flow (pick a bounty, hand it to your agent, paste the link and the
commit, get graded, climb the leaderboard, win) is played on make.fun's real desktop frontend, every step a spring-
driven move of the site's own elements, with no cuts.

- `out/final.mp4`: the ad (H.264, AAC, -14 LUFS). `out/poster.png` is its strongest frame and `out/contact.png` its
  contact sheet.
- `docs/x-policy-review.md`: the X Terms of Service and Ads Policies review, clause by clause, read live. The
  creative passes. The landing page has two fails, each with its fix.
- `docs/review_log.md`: five blind-judge critique rounds and the residue below the floor.
- `docs/states.md`: the state list on the beat grid. `docs/brief.md` and `docs/look.md` hold the brief and look plan.

## The idea: a relay

Nothing cuts. Each screen hands one real element to the next: the card opens into the bounty page, the prompt
leaves frame left for the agent, the repo link and the commit fly back in from frame right and land in the real
form, the dialog pops out of its button, the page slides to the entry's status, @you climbs to first, the site's own
win panel pops out of the first-place row, and its mark flies out to become the make.fun lockup. The site's desktop
layout is a 16:9 screen, so the entry plays full frame with the camera cropped in on each action; the status and the
ranking play beside the caption on the brand's magenta field.

## How it is built

1. `capture/stage.mjs` drives the live dev.make.fun production build in headless Chrome at a 1024 x 576 desktop
   viewport (the narrowest that keeps the desktop layout), with every write answered locally. The session is staged
   as `@you`; the entry, its grading, fictional rivals and a win notification are staged, which makes the site open
   its own win celebration.
2. `capture/freeze.mjs` walks the flow with real clicks and typing and freezes each state's hydrated DOM into
   `assets/states.js`, with the site's production CSS and fonts beside it.
3. `index.html`, `film.js` and `stage.js` mount those frozen states under the site's own stylesheet. `seek(t)`
   moves them as a pure function of time: a window and a spring camera, real elements flown, popped and slid.
   Every prize amount is redacted, and the header search's "$N in rewards" is removed; the win panel's prize line, per-place amounts and Share on X button are removed;
   GitHub's logo is hidden.
4. `scripts/render.mjs` (with `--dpr`) renders it deterministically. `audio/score.mjs` and `audio/cues.mjs`
   synthesize the music and SFX, and `scripts/mix.mjs` mixes them to -14 LUFS. `tools/` holds the measuring and
   frame-grab helpers used to build it.

```sh
cd capture && npm install && node freeze.mjs && cd ..        # re-freeze from the live site (optional)
node audio/score.mjs && node audio/cues.mjs && node scripts/sfx.mjs docs/cues.json out/sfx.wav --dur 18
node scripts/render.mjs index.html --selector '#film' --out out/silent.mp4 --fps 60 --dur 18 --w 1024 --h 576 --dpr 1.875 --sub 1
node scripts/mix.mjs --video out/silent.mp4 --audio audio/track.wav --audio out/sfx.wav --gain -3 --lufs -14 --out out/final.mp4
```
