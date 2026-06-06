# Family Tree Starter

A no-build, GitHub Pages-ready starter using [Family Chart](https://github.com/donatso/family-chart).

## Files

- `index.html` — page shell and CDN imports.
- `src/data.js` — family members and relationships. Start here.
- `src/app.js` — renders the tree and branch filters.
- `src/styles.css` — visual design.
- `.nojekyll` — tells GitHub Pages not to run Jekyll.

## Local preview

Open `index.html` directly in a browser, or run a tiny static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish on GitHub Pages

1. Create a GitHub repository, for example `family-tree`.
2. Upload these files to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/root`, then save.

## Privacy warning

GitHub Pages is normally public. Do not publish living people's full names, birth dates, addresses, health details, or sensitive family relationships unless you have consent.
