#!/usr/bin/env python3
"""Point twoyi.app/ios/ at a new IPA.

Every page links to /ios/; this script rewrites ios/index.html, the only file
that holds the IPA URL. It checks that the URL is reachable unless --no-check.

    scripts/set-ios-ipa.py https://dl.twoyi.ai/twoyi_1.1.0_928_2.ipa
"""
import argparse
import html
import pathlib
import sys
import urllib.request

PAGE = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Download Twoyi for iOS · 下载两仪 iOS 版</title>
<meta name="robots" content="noindex">
<meta http-equiv="refresh" content="0; url={url}">
<link rel="icon" href="/assets/logo.svg" type="image/svg+xml">
<link rel="stylesheet" href="/assets/site.css">
</head>
<body>
<main class="doc" style="text-align:center; padding-top:18vh">
  <h1>Downloading Twoyi for iOS…</h1>
  <p class="meta">IPA for iOS / iPadOS 15 or later. Sideload it with AltStore, SideStore, TrollStore or your own certificate.</p>
  <p class="meta" lang="zh-CN">正在下载两仪 iOS 版（IPA，iOS 15 及以上）。下载后用 AltStore、SideStore、TrollStore 或自己的证书签名安装。</p>
  <div class="cta" style="justify-content:center">
    <a class="btn" href="{url}">{name}</a>
    <a class="btn ghost" href="/">Twoyi home</a>
    <a class="btn ghost" href="/zh/" lang="zh-CN">两仪首页</a>
  </div>
</main>
</body>
</html>
"""


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("url", help="https URL of the .ipa")
    ap.add_argument("--no-check", action="store_true", help="skip the HTTP reachability check")
    args = ap.parse_args()

    url = args.url.strip()
    if not url.startswith("https://") or not url.endswith(".ipa"):
        sys.exit(f"expected an https URL ending in .ipa: {url}")
    if not args.no_check:
        # dl.twoyi.ai (Cloudflare) answers 403 to urllib's default User-Agent.
        req = urllib.request.Request(url, method="HEAD", headers={"User-Agent": "curl/8 twoyi-site"})
        try:
            with urllib.request.urlopen(req, timeout=20) as r:
                size = int(r.headers.get("Content-Length") or 0)
        except Exception as e:  # noqa: BLE001 - report any network failure plainly
            sys.exit(f"cannot reach {url}: {e}")
        print(f"ok: {url} ({size / 1e6:.1f} MB)")

    name = url.rsplit("/", 1)[-1]
    out = pathlib.Path(__file__).resolve().parent.parent / "ios" / "index.html"
    out.write_text(PAGE.format(url=html.escape(url, quote=True), name=html.escape(name)))
    print(f"wrote {out}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
