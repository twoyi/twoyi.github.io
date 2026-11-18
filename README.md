# twoyi.app

Site for Twoyi (两仪): plain static HTML, one stylesheet, no build step. Served by GitHub Pages
from the root of `master` with the custom domain in `CNAME`. Sibling site: twoyi.ai (Twoyi Twin),
whose `assets/site.css` this one shares; twoyi.app's own rules are at the end of the file.

```
index.html, zh/           home (English default / 中文), with JSON-LD (WebSite, SoftwareApplication ×2, FAQPage)
privacy.html, zh/         privacy policy
ios/, android/            download redirects (meta refresh): IPA on dl.twoyi.ai / twoyi.ai/download
guide/android-12.html     opened by the Android app on Android 12+; bilingual
guide/sponsor.html        opened by the Android app; bilingual
guide/index.html          the app's "Guide" link; picks / or /zh/ by browser language
gms.json                  read by the Android app to install Google services; keep the URL
404.html                  maps old VitePress URLs (/guide/*, /zh/guide/*) to the new pages
llms.txt                  summary for LLMs (llmstxt.org); keep its facts in sync with the pages
robots.txt, sitemap.xml
```

URLs used by shipped apps must stay: `/guide`, `/guide/android-12.html`, `/guide/sponsor.html`,
`/privacy`, `/gms.json`.

New iOS release: `scripts/set-ios-ipa.py <https URL of the .ipa>` checks the URL and rewrites
`ios/index.html`, the only file that holds it (every page links to `/ios/`). Commit and push. The Android download
follows twoyi.ai's `/download`. When facts change (OS minimums, Android version inside), update
both home pages, their JSON-LD, `llms.txt` and the privacy pages together.

Preview: `python3 -m http.server -d . 8000` (GitHub Pages also serves `/privacy` as `privacy.html`).
