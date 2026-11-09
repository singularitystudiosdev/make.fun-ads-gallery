# Ad 06 (9:16): peel and stick, a make.fun bounty end to end

A 15 s, 1080 x 1920, 60 fps X ad. The whole flow (pick a bounty, hand it to your agent, paste the link and the
commit, send it in, aim for first, win) plays on make.fun's real phone frontend, edge to edge, and the thing each step
moves comes off the screen as a die-cut sticker.

- `out/final.mp4`: the ad (H.264, AAC, -14 LUFS). `out/poster.png` is its strongest frame and `out/contact.png` its
  contact sheet.
- `docs/x-policy-review.md`: the X Terms of Service and Ads Policies review, clause by clause, read live on
  2026-11-08, with the author's response on the final cut. The landing page fails its rows (the beta pop-up, crypto
  and trading content without shown certification, relevance): do not run the ad until those are fixed. Two film
  rows stay open by choice: the staged win carries no "demo" label (the user's decision), and the review flags the
  URL inside the prompt and repo stickers (disputed in the response).
- `docs/review_log.md`: five blind-judge critique rounds, the fixes after the last round and the residue below the
  floor.
- `docs/states.md`: the state list on the beat grid. `docs/brief.md` and `docs/look.md` hold the brief and look plan.

## The idea: peel and stick

Ads 01-05 used a morph, a relay, a climb, a dive and a loupe. This one makes copy and paste physical. Copy is a peel
and paste is a stick:

- Frame 0: a sticker cut from the site's own win panel ("You won 1st place") falls from the lens onto the flinging
  board and lands on the 0.25 hit. On the 1.0 beat it is peeled off and tossed away, uncovering the bounty it sat on.
- Tap the card: the whole board peels away like a sheet off its backing, the bounty's page under it.
- Copy for your agent: the prompt is die-cut, peeled and lifted open to three lines, then tossed out of the frame to
  the agent.
- The agent's work comes back as stickers: the camera closes in on the form's two fields, and the repo link and the
  commit are slapped into them on the beat.
- @you's row rises as a sticker and is slapped into first place as the rivals step down.
- The site's own win sheet rises and bursts its confetti; the win is cut out as a sticker, the whole screen peels
  away to the brand's magenta, the sticker is slapped onto it, and its die closes in on its own mark: the make.fun
  lockup, "Win bounties."

The captions are strips of magenta label tape, each slapped on over the last: "Bounties you can win." / "Pick a
bounty." / "Hand it to your agent." / "Submit an entry." / "Paste the link." / "And the commit." / "Send it in." /
"Aim for first."

## Quality

Five blind-judge rounds (a fresh judge each time, pixels only; floor 8 on every axis). Round 5, judged on the final
render: hook 6, readability 6, motion 6, variety 7, composition 6, brand 8, sound 7. The floor was not cleared;
round 5's two execution findings were fixed after the round and re-rendered, not re-judged. `docs/review_log.md` has
every round and the residue, with what would be tried next.

## How it is built

1. `capture/stage.mjs` drives the live dev.make.fun production build in headless Chrome at a 360 x 640 phone
   viewport, with every write answered locally. The session is staged as `@you`; the entry, its scoring, fictional
   rivals and a win notification are staged, which makes the site open its own win celebration.
2. `capture/freeze.mjs` walks the flow with real taps and typing and freezes each state's hydrated DOM into
   `assets/states.js`, with the site's production CSS and fonts beside it (a fresh capture for this ad). 360 x 640 at
   3x is exactly 1080 x 1920.
3. `index.html`, `film.js`, `stage.js` and `sticker.js` mount those frozen states under the site's own stylesheet.
   `seek(t)` is a pure function of time. A sticker is a clone of a real element (or a caption's own face) in a white
   die-cut edge; its peel is closed-form geometry (the stuck part is a clip polygon, the folded part its reflection
   across the fold line, drawn as the sticker's curled paper back), and a whole screen peels the same way. Every
   prize amount is removed or redacted; the dock's money line, the ranking's "Reward" header and "top 10 paid", and
   the win panel's prize line, per-place amounts, Share on X and View payout are removed; GitHub's logo is hidden;
   the board keeps its four coding bounties. Sticky elements are emulated so the page is one drawing layer.
4. `scripts/render.mjs` (`--dpr 3 --settle 2`) renders it deterministically on a software rasterizer;
   `scripts/prender.mjs` runs it in parallel spans (losslessly) and encodes the joined frames once. `audio/score.mjs`
   synthesizes the music (F major, 120 BPM: F C Dm Bb | Dm C | a half bar of F for the win, a held F add9 under the
   end card), `audio/cues.mjs` writes the SFX cue sheet (peels, slaps, taps), `scripts/sfx.mjs` synthesizes it (with
   two voices added for this ad, peel and slap), and `scripts/mix.mjs` mixes everything to -14 LUFS. `tools/` holds
   the measuring, frame-grab, layer and money-word sweep helpers used to build it.

```sh
cd capture && npm install && node freeze.mjs && cd ..        # re-freeze from the live site (optional)
node audio/score.mjs && node audio/cues.mjs && node scripts/sfx.mjs docs/cues.json out/sfx.wav --dur 15
node scripts/prender.mjs --jobs 4 --spans 30 --parts out/parts60 --out out/silent.mp4 -- index.html --selector '#film' --fps 60 --dur 15 --w 360 --h 640 --dpr 3 --sub 1 --settle 2
node scripts/mix.mjs --video out/silent.mp4 --audio audio/track.wav --audio out/sfx.wav --gain -3 --lufs -14 --out out/final.mp4
node tools/sweep.mjs 0.05                                    # every on-screen money word, frame by frame (expect none)
```
