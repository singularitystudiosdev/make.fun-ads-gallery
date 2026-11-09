Convert these 5 ads AD_LIST into an ad for https://make.fun/. Keep it fully X tos compliant. Do not explicitly say the ad was AI generated. Do not show explicit # values on winning a bounty, ex: "win $100". Only use the terminology of "bounties" as what you can win. Use any keys needed on my macos keychain.

## AD_LIST
The top picks from Immunefi's ads (https://immunefi.com/), with their translation angles, are in /Users/adrianagne/Documents/cosmos/projects/make.fun-ads/pipeline/top5/immunefi/top5.md (and top5.json). The original creatives are under /Users/adrianagne/Documents/cosmos/projects/make.fun-ads/pipeline/agg/immunefi/media/: Read them.
1. LinkedIn (LinkedIn Ad Library), carousel ad, 6 cards at 1080x1080; one creative carried by 2 ad IDs (922029066, 922039536). Translates to an X carousel ad (2-6 cards, 1:1, multi-destination). (https://www.linkedin.com/ad-library/detail/922029066): Pick a live bounty and build it with your agent: the best graded entries win bounties.
2. Google Search (Google Ads Transparency Center), text search ad. X has no search text ad; translates to a promoted text post with a website card. (https://adstransparency.google.com/advertiser/AR04140045523530809345/creative/CR01813015973221892097?region=anywhere): Submit solutions your AI agent built, get them graded in a sandbox, and win bounties.
3. Google Search (Google Ads Transparency Center), text search ad. Translates to a promoted text post with a website card, or a 1:1 list image. (https://adstransparency.google.com/advertiser/AR04140045523530809345/creative/CR05636123456115310593?region=anywhere): Bounties for AI agents: every entry graded in a sandbox, the same way, twice.
4. YouTube (@immunefi channel), brand film, 1:25, 1280x720, voiceover with music and burned-in captions; paid distribution unverified. Translates to a 15-30 s X video ad (1:1 or 16:9, plus a 9:16 cut). (https://www.youtube.com/watch?v=DnGygL4D1pA): AI agents write software now. Here, the best entries win bounties.

## What to make
Convert each pick into its own finished make.fun ad, one ad per pick. Open https://make.fun/ first and use its real brand (name, logo, colours, voice; `mcp__scraper__brand` helps) and its real product: AI agents build software; you submit a solution (a repository plus the AI transcripts that wrote it), it is graded in a sandbox, and you can win bounties. Each ad keeps the format of its source (static image, video, carousel, text post) and is production-ready: final copy plus a real rendered creative file (PNG / JPG image or MP4 video), made with whatever generation tools and API keys you find (macOS keychain: `security find-generic-password -s <service> -w`; the built-in `mcp__media__*` tools; fal.ai).

Copy rules for every ad, covering all text, on-screen text and voiceover:
- What you win is only ever "bounties" ("win bounties", "claim a bounty"). Never cash, money, prizes, rewards, payouts, USDC, crypto or earnings.
- No amounts or numbers attached to winning ("win $100", "$500 bounty", "10x").
- Never say or imply the ad itself was made with AI ("AI-generated", "made with AI"). Saying make.fun involves AI agents is fine: that is the product.
- No income or get-rich claims, no guaranteed outcomes, no gambling or betting language, no trading promises.
- Do not carry the source brand's trademark, logo, people or footage into the make.fun ad.

## X compliance (required)
Read X's live terms in this session, not from memory: the Terms of Service https://x.com/en/tos, the Ads Policies https://help.x.com/en/business-and-advertising/ads-policies and every sub-policy each ad touches (financial services / crypto, gambling, misleading and deceptive, unrealistic claims, IP and trademark, synthetic and manipulated media, and so on). help.x.com and x.com fail plain fetch: use `mcp__scraper__scrape` (or browser-control). For each ad write a verdict table: clause · source URL · pass/fail · reason (quote the clause on a fail). Ambiguous counts as a fail; revise the ad until every row passes. Advertiser-level conditions the creative cannot fix (for example make.fun paying out in crypto, which may need X pre-authorization) go in a separate "Preconditions before upload" section. Do NOT upload, post or schedule anything on X or any ad platform.

## Output (exact paths)
/Users/adrianagne/Documents/cosmos/projects/make.fun-ads/ads/immunefi/ad-1/ ... ad-N/ (one folder per pick), each with:
- `copy.md`: platform and format, headline, primary text, CTA, on-screen text, voiceover script, landing URL https://make.fun/, and the source ad it converts (source URL plus one line on what was kept).
- the creative file(s): `creative.png` / `creative.mp4` (plus storyboard frames for video).
- `compliance.md`: the X verdict table for that ad, plus preconditions.
Plus /Users/adrianagne/Documents/cosmos/projects/make.fun-ads/ads/immunefi/README.md indexing the ads with their creatives embedded.
Keep /Users/adrianagne/Documents/cosmos/projects/make.fun-ads/ads/immunefi/ to the finished make.fun ads only: no copies of the original creatives there.
LAST: write /Users/adrianagne/Documents/cosmos/projects/make.fun-ads/pipeline/convert/immunefi.DONE containing the number of finished ads.

## Rules
- Do not ask the user questions; make every judgment call yourself.
- Do not git commit or push; the manager publishes. Do not stop before the DONE file is written.
