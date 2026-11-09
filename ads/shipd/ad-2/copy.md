# Ad 2: "Now it codes for him" (the dancing cat)

## Platform and format

- **Platform:** X Promoted video post from the make.fun account, with a website card.
- **Format:** vertical 9:16 meme reel, 1080x1920, 24 fps, H.264 High, AAC 48 kHz stereo.
- **Length:** 7.67 s (184 frames). That is exactly four bars of the music, so the loop is seamless.
- **Audio:** a music bed, mastered to −14.1 LUFS integrated, true peak −1.7 dBTP. No voiceover.
- **Text:** white, outlined, high in the frame and set straight over the picture, as in the source. The make.fun lockup sits in a small dark chip under the text, clear of the cat.

## Headline (website card, 39 characters)

Put your agent to work on real bounties

## Primary text (post text)

Stop arguing with your agent about who codes better. Put it to work: it builds the entry, a sandbox grades it, and the best entries win bounties. Free to enter.

The post text has no URL, no hashtag and no emoji. The name "make.fun" is left out because X links domains automatically, so the website card carries the link.

## CTA

Learn more (X website-card button)

## On-screen text

Static from 0.0 to 7.67 s. White Inter Bold with a thin black outline, centred in the top quarter.

> How my CS bro acts now that his agent goes after bounties on make.fun.
>
> (He spent all day complaining that AI codes better than he does.)
> (Now it codes for him.)
>
> [make.fun lockup chip]

## Picture

One locked-off phone-style shot of a dorm room in the evening: warm string lights, two abstract geometric prints, and a desk with a matte-black laptop whose out-of-focus screen shows a dark code editor.

| Time | Picture | Music |
|---|---|---|
| 0.0–7.67 s | An orange tabby cat stands upright on the bed and dances in place the whole time: bouncy steps, foot kicks, paws pumping, mouth open as if singing. | The dance-pop hook (125 BPM: four-on-the-floor kick, slap bass, claps, bright synth lead) starts on its first downbeat and runs 4 bars. |
| 7.67 s | Hard loop back to the start. | — |

## Voiceover script

None, as in the source. The music is instrumental.

## Landing URL

https://make.fun/

## Source ad it converts

- **Source:** Shipd (Datacurve) A3, an Instagram Reel by `@hookedon.code` and `@shipd_code`: https://www.instagram.com/reel/DAtiClPIVaL/
- **What was kept:**
  - The 9:16 loop of about 7 s.
  - Outlined white text set high, straight over the picture.
  - The "How my CS bro acts … (complaint) (ironic twist)" structure.
  - One uncut shot of an animal dancing on a bed in a dorm room, set to music.
- **What changed:**
  - "Gets paid to code" became "his agent goes after bounties on make.fun".
  - The jobs-crisis complaint became a personal one ("AI codes better than he does").
  - "His code will be used to train AI" became "Now it codes for him".
  - The keyed-out meme cat, the stranger's bedroom photo and the trending track were all replaced by original material.

## Production notes

- **Plate:**
  - The opening still was generated with `nano-banana-pro-preview`. The laptop was then edited into a generic matte-black machine with no logo and no notch, because the first version read as a branded laptop.
  - It was animated with `gemini-omni-1.1-flash` (8 s, 1080p, take 2 of 3).
  - Take 1 was rejected for a vanishing tail, a stretched torso and a branded-looking laptop. Take 3, from `grok-imagine-video-1.5`, was rejected because the cat stops dancing.
  - Final cut: frames 0–183.
- **Music:** an original Lyria 3.5 cue. The excerpt is 15.36–23.03 s of the generated track: the first four bars of its hook, with no vocals, risers or drop-outs. It is mastered in `pipeline/convert/shipd-kit/render/render.sh`.
- **Type and brand:** Inter (SIL Open Font License). The make.fun lockup is the press-kit file `lockup-on-dark.svg`, used as supplied, on a #11141B chip (the Dark canvas).
- **Scratch:** `pipeline/convert/shipd-kit/ad2/`.
