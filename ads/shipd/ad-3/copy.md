# Ad 3: "He thought I was cooked" (the deadpan alpaca)

## Platform and format

- **Platform:** X Promoted video post from the make.fun account, with a website card.
- **Format:** vertical 9:16 meme reel, 1080x1920, 24 fps, H.264 High, 6.0 s, one shot that hard-loops.
- **Audio:** silent, like its source. The file carries a silent AAC 48 kHz stereo track so every player handles it. There is no music and no voiceover; the burned-in text carries the whole ad.
- **Layout:** a black text panel fills the top 35% of the frame (0–672 px). The plate fills the bottom 65% (672–1920 px). The make.fun lockup sits under the text, using `lockup-on-dark.svg` as supplied.

## Headline (website card, 46 characters)

Your vibe coding session can be a bounty entry

## Primary text (post text)

Up all night building with your agent? Make it an entry. Submit the repo and the session that built it, and a sandbox grades every entry the same way, twice. Free to enter.

The post text has no URL, no hashtag and no emoji. "make.fun" is not written in the post text, because X links domains automatically; the website card carries the link.

## CTA

Learn more (X website-card button)

## On-screen text

Static for the whole 6.0 s, in centred white Inter SemiBold on black:

> How my CS bro reacts when he finds out my all-night vibe coding session was an entry for a make.fun bounty.
>
> (He thought I was cooked.)
>
> [make.fun lockup]

## Picture, beat by beat

| Time | Plate |
|---|---|
| 0.0–2.2 s | Tight portrait of a fluffy cream-and-fawn alpaca in a sunlit barn. It stares straight down the lens, a mouthful of hay with strands sticking out, perfectly still and flatly unimpressed. |
| 2.2–5.5 s | It chews slowly from side to side and blinks, and the stare never breaks. |
| 5.5–6.0 s | Its lips part slightly mid-chew, then the clip hard-loops. |

## Voiceover script

None. The ad is silent, like its source.

## Landing URL

https://make.fun/

## Source ad it converts

- **Source:** Shipd (Datacurve) A2, an Instagram Reel by `@hookedon.code`, disclosed with `#ad`: https://www.instagram.com/reel/C9akzzVo0xo/
- **What was kept:**
  - The silent 9:16 loop of about 6 seconds.
  - A black top panel with centred white text: one setup line and one parenthetical punchline.
  - The "How my CS bro reacts … (he thought I was cooked)" vindication joke.
  - One deadpan animal close-up, held far too long, chewing, with a tiny mouth movement at the end.
- **What changed:**
  - "Got accepted by Shipd and now get paid to solve coding challenges" became "my all-night vibe coding session was an entry for a make.fun bounty". make.fun has no application step, and an entry really does include the session transcript.
  - The zoo-gorilla footage was replaced by an original alpaca plate.

## Production notes

- **Plate:**
  - The opening still was generated with `nano-banana-pro-preview`, then animated with `gemini-omni-1.1-flash` (6 s, 1080p, take 1).
  - It is cropped from the 1080x1920 take, rows y 240–1488.
  - Chewing makes the hay strands and teeth soften slightly between frames. You only see it frame by frame, not at feed speed.
- **Type and brand:** Inter, under the SIL Open Font License. The make.fun lockup is the press-kit file `lockup-on-dark.svg`, used unaltered. The panel is Night canvas #000000.
- **Scratch:** `pipeline/convert/shipd-kit/ad3/`.
