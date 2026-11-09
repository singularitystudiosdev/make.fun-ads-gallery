# Ad 1: "He is cooked" (the crochet doll turns around)

## Platform and format

- **Platform:** X Promoted video post from the make.fun account, with a website card.
- **Format:** vertical 9:16 meme reel, 1080x1920, 24 fps, H.264 High with AAC 48 kHz stereo.
- **Length:** 6.0 s, one shot, built to hard-loop like its source.
- **Audio:** a music bed, mastered to −14.1 LUFS integrated with true peak −1.6 dBTP. There is no voiceover. All the text is burned in, so the ad reads with the sound off.
- **Layout:** a black text panel fills the top 45% of the frame (0–864 px). A plate fills the bottom 55% (864–1920 px). The make.fun lockup (`lockup-on-dark.svg`, used as supplied) sits under the text in the panel.

## Headline (website card, 52 characters)

Your agent builds it. The best entries win bounties.

## Primary text (post text)

Skip the practice grind. Point your agent at a real bounty: it builds the entry, you submit the repo with the session that built it, and a sandbox grades it. Free to enter.

The post text has no URL, no hashtag and no emoji. The name "make.fun" is kept out of it on purpose, because X links domains automatically. The website card carries the link.

## CTA

Learn more (X website-card button)

## On-screen text (static, 0.0–6.0 s, centred white Inter SemiBold on black)

> How my CS bro looks at me when I tell him my agent builds entries for bounties on make.fun while he's still grinding practice problems.
>
> (He didn't know.)
> (He is cooked.)
>
> [make.fun lockup]

## Picture, beat by beat

| Time | Plate | Sound |
|---|---|---|
| 0.0–1.4 s | Extreme close-up of the back of an original handmade crochet doll's head: messy chestnut-brown yarn hair with a cowlick at the crown, and a grey knitted hoodie hood. It holds still. | Soft, muffled plucked synth |
| 1.4–3.0 s | The head turns slowly in one continuous direction, through a side profile, to face the camera. | A riser builds |
| 3.0 s | The face lands: chunky black rectangular glasses, eyes wide, brows up, jaw dropped in a round open "O". | Impact hit |
| 3.0–6.0 s | The doll holds the stunned stare. The loop cuts back to the back of the head. | A bouncy hip-hop groove: 808 bass, claps and a plucked hook |

## Voiceover script

None, as in the source. The music bed has no vocals or lyrics.

## Landing URL

https://make.fun/

## Source ad it converts

- **Source:** Shipd (Datacurve) A1, an Instagram Reel posted by `@hookedon.code` as a paid partnership with Shipd: https://www.instagram.com/hookedon.code/reel/C8yv7DBIUB_/
- **What was kept:** the 9:16 loop of about 6 seconds and the split frame (a black top panel of centred white text over a plate). Also kept: the "How my CS bro looks at me when I tell him … (He didn't know) (He is cooked)" hook, and the one-shot gag of a knitted head that turns from behind to a slack-jawed stare at about 3 seconds, set to music.
- **What changed:**
  - The pay-for-solving-questions claim became "my agent builds entries for bounties on make.fun".
  - "LeetCode" became "practice problems".
  - The third-party character plate was replaced by an original doll design.
  - The trending song was replaced by original music.

## Production notes

- **Plate.** The doll is an original design: a peach amigurumi head, chestnut yarn hair, black rectangular glasses and a grey knitted hoodie. It was checked against well-known characters, and the first draft (ginger hair with round wire glasses) was dropped because it leaned toward familiar characters.
  - The stills were generated with `nano-banana-pro-preview`: the face first, then the back of the head as an edit of the face.
  - The plate was animated first frame to last frame with `gemini-omni-1.1-flash` (6 s, 1080p, take 2). Take 1 was rejected because the head flipped direction mid-turn.
  - The plate is a crop of the 1080x1920 take (y 280–1336).
- **Music.** Two original cues, mixed and mastered in `pipeline/convert/shipd-kit/render/render.sh`:
  - An ElevenLabs Music cue built from a composition plan: hush, riser and impact. It is offset so the impact lands at 3.0 s.
  - A Lyria 3.5 groove that enters on the hit.
- **Type and brand.** Inter (SIL Open Font License). The make.fun lockup is the press-kit file `lockup-on-dark.svg`, unaltered. The panel is Night canvas #000000.
- **Scratch and rebuild.** Scratch files are in `pipeline/convert/shipd-kit/ad1/`. To rebuild, run `python3 -I overlays/build.py && ./render/render.sh` in `pipeline/convert/shipd-kit/`.
