# GeoReader project page

Static homepage draft for the signed arXiv paper. This folder is independent of the paper repositories. Open it with a local server from this folder:

```bash
python -m http.server 8765
```

Then visit `http://localhost:8765/`. Pushes to `main` publish the static files through GitHub Actions at `https://iris0329.github.io/georeader-homepage/`. The arXiv button stays inactive until the paper URL is confirmed. The Code button points to `https://github.com/iris0329/GeoReader`; make that repository publicly accessible before announcing the page. Confirm the author list and BibTeX before announcing it. This folder is intentionally kept outside the paper repositories and the arXiv source export.

`assets/teaser.png` and `assets/method.png` are renderings of the paper's Figure 1 and Figure 2. `assets/stage1-data.png` and `assets/stage2-data.png` come from the supplementary training-data figures. Re-render these assets when the corresponding paper figures change.
