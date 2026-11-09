# Ad 11 (16:9): gravity, a make.fun bounty end to end

A 15 s, 1920 x 1080, 60 fps X ad. The whole flow (pick a bounty, hand it to your agent, submit an entry, paste the
link and the commit, send it in, climb to first, win) plays on make.fun's real phone frontend, where every piece of the
site, and every caption, is a body that falls.

- `out/final.mp4`: the ad (H.264, AAC, -14 LUFS). `out/poster.png` is its strongest frame and `out/contact.png` its
  contact sheet.
- `docs/x-policy-review.md`: the X Terms of Service and Ads Policies review, clause by clause, read live on
  2026-11-09, with the author's response on the final cut.
- `docs/review_log.md`: the blind-judge critique rounds, what each changed, the determinism proof and the residue.
- `docs/states.md`: the state list on the beat grid. `docs/brief.md` and `docs/look.md` hold the brief and look plan.

## The idea: gravity

Ads 01-10 used a morph, a relay, a climb, a dive, a loupe, a peel, a split-flap, a route map, one line and a stack.
This one gives the frontend weight. The frame is split: an ink panel the captions land on, and the site's own phone page
(420 x 450 CSS px, under a camera at 1.19-1.28x), into which the real UI falls. One gravity moves everything, as
closed-form ballistics: a body drops, lands with one bounce and a 70 ms squash, and when its step is done it is
knocked loose and falls out through the foot of the frame.

- It opens cold on the payoff: the site's win sheet slams down on frame 0, its mark lands last and the site's own
  confetti bursts out of it, under "Bounties / you can / win." Then the floor gives way, the win falls out, and the
  bounty's card rains in under it.
- A tap knocks a screen loose; the next screen rains in from above, its lowest piece first, so nothing ever falls
  through what has landed.
- Copy for your agent: a copy of the prompt rises out of its row and is thrown straight up out of the frame, to your
  agent.
- For the entry the camera whips the page to the left half and the captions land on the right: the site's entry sheet
  drops in heavy, and the link and the commit come back from your agent, each thrown in from below the frame's right
  edge, arcing over and dropping into its field. The Commit field drops out from behind the link field as the site
  inserts it. Submit entry knocks the form out of the sheet and the receipt lands in it.
- The ranking drops in as one body with @you third; @you jumps over both rivals (the one body that gets a hero's hang
  time) and they fall one slot each into the space it left.
- The win comes down heavy a second time, on a magenta slab that drops onto the panel. Then the whole page topples out
  of the frame as one body; make.fun's mark lands on the ink, the wordmark lands letter by letter, "Win bounties." is
  thrown up from below onto its place, and the mark hops once.

The sound is the same physics: every touch of every body (each landing and each bounce, with the speed it hit at,
exported from the film) strikes a marimba bar in the score, low for heavy bodies and high for light ones, so a screen
raining in plays a run up the chord and the wordmark's letters a run up the scale to the tonic.

Captions, as stacks on the panel: "Bounties / you can / win." / "1 Pick / a bounty." / "2 Hand it / to your / agent." /
"3 Submit / an entry." / "4 Paste / the link / and commit." / "5 Send / it in." / "6 Climb / to first." / "Win / the
bounty." / end: make.fun, "Win bounties."

## Quality

Five blind-judge rounds (a fresh judge each time, pixels only; floor 8 on every axis). Round 5, judged on the 60 fps
final: hook 6, readability 5, motion 6, variety 6, composition 5, brand 8, sound 6. The floor was not cleared on six
axes. Round 5's two execution findings (the "Climb to first." caption meeting the magenta slab, and a static end) were
fixed in the final but not re-judged. The judges' standing complaint across all five rounds is readability: the site's
own microcopy is small on a phone in a 16:9 frame whose page column is 62% of the width. `docs/review_log.md` has
every round's scores, the judge's worst three and what changed, the determinism proof and the residue with what to try
next.

The final is deterministic: rendered on Chrome's CPU compositor, four 0.5 s spans re-rendered alone match it frame for
frame (120 of 120). Mixed to -14.0 LUFS, -1.36 dBTP true peak; 0 flashes; 0 money words on screen (swept every
0.05 s).

Note for the series: ad 12 (9:16, in progress in another chat when this one was made) independently chose a gravity idea
too ("bricks" falling into a magenta well under a caption bar). The two executions differ (this one: a split frame,
captions that are bodies, values thrown across the seam, a hero's jump), but they share the premise.

## How it is built

1. `capture/stage.mjs` drives the live dev.make.fun production build in headless Chrome at a 420 x 450 portrait touch
   viewport (the site's own phone layout), with every write answered locally. The session is staged as `@you`; the
   entry, its scoring, fictional rivals and a win notification are staged, which makes the site open its own win
   sheet. The board is filtered to four of make.fun's own bounties.
2. `capture/freeze.mjs` walks the flow with real taps and typing (Enter manually opens the site's entry sheet straight
   on its form) and freezes each state's hydrated DOM into `assets/states.js`, with the production CSS and fonts beside
   it (a fresh capture for this ad, 2026-11-09). `capture/inline.mjs` inlines the images and pins the stylesheet's
   media to the capture's phone: pointer and hover, and every width, height and orientation query (the film's page is
   800 x 450 landscape; the column inside it is the 420 x 450 portrait phone).
3. `index.html`, `film.js` and `stage.js` mount each state as many times as the film needs pieces, each copy cut down
   to the part it shows (visibility, so a part sits exactly where the site laid it out), and move each piece as one
   body. `seek(t)` is a pure function of time: drops, throws, jumps and bounces are closed-form ballistics under one
   gravity; the camera and the frame's flip are sums of springs (`lib/motion.mjs`). Every prize amount is removed
   (the "Bounty" figure and label, the win sheet's prize line and per-place amounts, the ranking's inline prizes), as
   are Share on X, View payout, "Reward" and "top 10 paid", the wallet banner and GitHub's logo; `tools/sweep.mjs`
   proves no money word reaches a frame.
4. `scripts/render.mjs` (`--w 800 --h 450 --dpr 2.4 --settle 4`, with `MOTION_REEL_SOFTWARE_COMPOSITING=1`: Chrome's CPU
   compositor, bit-identical run to run) renders it deterministically;
   `scripts/prender.mjs` runs it in parallel spans (losslessly) and encodes the joined frames once.
   `tools/events.mjs` exports every touch, tap, fall, throw, jump and burst from the film itself; `audio/score.mjs`
   writes the music (B-flat major, 120 BPM) with a marimba strike on every touch, `audio/cues.mjs` the SFX cue sheet,
   `scripts/sfx.mjs` synthesizes it, and `scripts/mix.mjs` mixes everything to -14 LUFS.

```sh
cd capture && npm install && node freeze.mjs && node inline.mjs && cd ..   # re-freeze from the live site (optional)
node tools/events.mjs && node audio/score.mjs --dur 15 && node audio/cues.mjs
node scripts/sfx.mjs docs/cues.json out/sfx.wav --dur 15
MOTION_REEL_SOFTWARE_COMPOSITING=1 node scripts/prender.mjs --jobs 8 --spans 30 --parts out/parts60 --out out/silent.mp4 -- index.html --selector '#film' --fps 60 --dur 15 --w 800 --h 450 --dpr 2.4 --sub 1 --settle 4
node scripts/mix.mjs --video out/silent.mp4 --audio audio/track.wav --audio out/sfx.wav --gain -3 --lufs -14 --out out/final.mp4
node tools/sweep.mjs 0.05                                    # every on-screen money word, frame by frame (expect none)
node tools/flash.mjs out/final.mp4                           # the flash check (expect 0 flashes)
```
