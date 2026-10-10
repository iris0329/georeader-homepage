# GeoReader project page

Static homepage draft for the signed arXiv paper. This folder is independent of the paper repositories. Open it with a local server from this folder:

```bash
python -m http.server 8765
```

Then visit `http://localhost:8765/`. Pushes to `main` publish the static files through GitHub Actions at `https://iris0329.github.io/georeader-homepage/`. The arXiv button stays inactive until the paper URL is confirmed. The Code button points to `https://github.com/iris0329/GeoReader`; make that repository publicly accessible before announcing the page. Confirm the author list and BibTeX before announcing it. This folder is intentionally kept outside the paper repositories and the arXiv source export.

Fonts: `assets/fonts/` holds Latin subsets of Lato Regular/Bold (OFL, same font as the paper figures).

The GeoReader wordmark follows the paper's `paper_commands.tex`: bold Geo in `#F34C08` and Reader in `#008D70`. The plain-text page title, metadata, alt text, and BibTeX keep the unstyled spelling.

`assets/teaser.webp` and `assets/method.webp` are renderings of the paper's Figure 1 and Figure 2. `assets/stage2-data.webp` comes from the paper's Stage 2 training-data figure (converted to WebP, quality 90). `assets/logos/` holds the affiliation emblems shown under the author list, the same set as the arXiv paper's first page (sources in the paper repository's `figures/affiliation_logos/README.md`). Re-render these assets when the corresponding paper figures change.

`assets/model-logos/` holds the five SVG vendor marks used by the API rows in Table 1. They match the paper's `figures/model_logos/` assets; provenance and the note that these are community renditions are in that folder's README.

The five WebP visualizations are cropped from Figures 3, 4, 9, 10, and 11 of the signed paper PDF (pages 8, 9, 32, 33, and 34). Re-export them when the paper figures or pagination change.

Page order: Abstract → 01 Motivation → 02 Method → 03 Training data → 04 Main results → 05 Use of geometry → 06 Ablations → 07 Spatial QA cases → Authors. Tables 1 and 2 in Main results are generated from the paper's LaTeX sources (`tables/mindcube_ego3d_results.tex`, `tables/main_results.tex`), keeping each block's best (bold, orange) and runner-up (gray) marks; Table 3 (geometry interventions) and the three ablation tables copy values from the paper's Tables 4, 5, 7 and 8. Figures and tables are numbered continuously on the page (Figure 1–8, Table 1–3) without separating main-paper and supplementary material. The additional attention cases start collapsed; correct spatial-QA answers and failure cases remain visible. Regenerate or update the figures and tables together with the paper.
