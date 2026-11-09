# Crunch ad 5: commute train video

## Platform and format
X Promoted video with Website Card. 16:9, 1920x1080, 5.0 s, 24 fps (the model's native rate, not upsampled), H.264 High yuv420p, AAC-LC 48 kHz stereo, +faststart, 4.4 MB. One locked-off shot, no cut. Music only, loudness -13.9 LUFS integrated, true peak -2.5 dBTP. Poster: poster.png (1920x1080).

## Headline
Commute time is build time.

## Primary text
Entering a bounty on the train, because commute time is build time.

(67 characters, no URL, no hashtag, no emoji.)

## CTA
Learn more

## On-screen text
None. No captions, no supers. The only marks on screen are the real make.fun mark (press kit `mark-on-dark-1024.png`), shown twice for the full 0.0-5.0 s: small on the front of the black cap, and as a round die-cut sticker on the laptop lid. There is no other brand, logo or readable text anywhere in the frame.

## Voiceover script
None (music only).

## Landing URL
https://make.fun/

## Source ad it converts
https://x.com/crunchDAO/status/2119089239933784383 (A2). Kept: the format and rhythm (one locked-off eye-level aisle shot of a builder typing on a laptop at a fold-down train tray, backpack on the seat beside, autumn fields streaking past the right window, 5 s, no cut, no text, music only) and the "Doing X on the train, because commute time is ... time" line shape. Everything else is new: different cast, carriage, wardrobe details, music and copy; no Crunch footage, frame, mark or wording is used.

## Production notes
- Cast: fictional woman, early 30s, short dark bob, black cap, black hoodie, wide grey trousers; black backpack on the blue seat beside her; generic regional carriage, no livery or signage; soft passengers in the distance.
- First frame: OpenAI gpt-image-2.6-sunburst (via the built-in media tool), reference = make.fun `mark-on-dark-1024.png`, 2 candidates, #1 chosen. No Crunch image was ever used as a model input.
- Animation: gemini-omni-1.1-flash image_to_video, 1080p 16:9, 5 s, 24 fps, 2 takes; take 2 chosen (steadier window motion).
- Post: in the model output the mark on the cap and on the lid sticker drifted (the small magenta star disc turned into a blob). Both were replaced frame by frame with the real press-kit mark composited with a tracked elliptical perspective fit (ellipse fit of the lid sticker and cap badge per frame, 3x supersampled, light blur and tone match). The cap uses the same real mark, small, centred on the front panel.
- Music: Lyria (lyria-3-clip-preview), calm lo-fi instrumental, trimmed to 5.0 s with 0.4 s fade in and 0.9 s fade out, mixed to -13.9 LUFS / -2.5 dBTP.
- Scratch and scripts: pipeline/convert/crunch-kit/ad5/
