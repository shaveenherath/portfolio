# Portfolio

Minimal Next.js portfolio scaffold. Replace placeholders (name, email, links) with your information.

Getting started

```bash
# install
npm install

# run dev
npm run dev
```

Build & production

```bash
npm run build
npm start
```

Notes
- Edit `pages` and `components` to update content.

Deploy to GitHub Pages (automatic via GitHub Actions)

- This repository contains a GitHub Actions workflow that builds the app, runs `next export`, and deploys the generated `out` folder to GitHub Pages on pushes to the `main` branch.
- Requirements: your default branch should be named `main`. If you use `master` or another branch, update `.github/workflows/deploy.yml` accordingly.
- To enable: push all files to your GitHub repo, then open the repository on GitHub. The workflow will run on every push to `main` and publish the site.

Manual steps to test locally before pushing:

```bash
npm install
npm run build
npm run export

# preview the static `out` directory, e.g. using a simple server
npx serve out
```

