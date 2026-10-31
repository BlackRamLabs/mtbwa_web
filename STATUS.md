# STATUS — www_mtbwa

Latest-state view of the mtbwa.com.au marketing site. Replace outdated info — this is not a changelog.

## Deployment

- Static site on GitHub Pages from the `publish` branch (origin/HEAD -> publish). Live site: <https://www.mtbwa.com.au>
- No build step, no package.json — plain HTML/CSS/JS. Edit files, merge to `publish`, GitHub Pages deploys.

## Recently merged work

- `1e8c95d` (RR-286): deep links to MTB WA Race Results from Racing + club listings
- `0ae8075` (TS-6): robots.txt + sitemap.xml for mtbwa.com.au
- `2446f05` (RR-259): /raceresults landing page

## Work in flight

- `TS-8-tyre-track-wa-svgs` (TS-8, awaits review/merge): tyre-tread W/A letterforms propagated to all 6 MTBWA SVG variants in `assets/icons/` (canonical artwork: `MTBWA_icon_nobackground.svg`), plus user's homepage hero + trails safety copy edits. Render-verified PNGs in `mtbwa_project/tmp/ts8_renders/`.

## Known issues / gotchas

- SVG variants use different coordinate spaces. Icon files: `viewBox="-6.2115 -35.871 240 240"`; the re-authored canonical file uses `viewBox="325.488 138.224 240 240"` (offset +331.6997420, +174.0952613). Logo files are `350x100` with unscaled WA-local geometry — see the TS-8 commit message for the exact mapping matrices.
- All HTML references the SVG assets directly (`MTBWA_icon.svg` favicon, `MTBWA_logo.svg` nav/footer) — no raster exports of the logo exist in this repo, so logo artwork changes need no PNG regeneration.
- The certification page ships a browser-console test suite (`runCertificationTests()`) — no automated lint/test tooling in the repo.
