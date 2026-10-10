# GeoReader project page

Static homepage draft for the signed arXiv paper. This folder is independent of the paper repositories. Open it with a local server from this folder:

```bash
python -m http.server 8765
```

Then visit `http://localhost:8765/`. Pushes to `main` publish the static files through GitHub Actions at `https://iris0329.github.io/georeader-homepage/`. The paper link stays inactive until the arXiv URL is confirmed. Confirm the author list and BibTeX before announcing the page, and add the code link when its repository is public. This folder is intentionally kept outside the paper repositories and the arXiv source export.

`assets/teaser.png` and `assets/method.png` are renderings of the paper's Figure 1 and Figure 2. Re-render them when the corresponding PDFs change.
