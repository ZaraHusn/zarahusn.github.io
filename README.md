# zh. — personal site (flat layout)

Your vanilla site with Markdown posts and an About page. Everything lives in one
folder (no subfolders) so it's easy to upload from a phone. Deploys to GitHub
Pages as-is, no build step.

## Files

- `index.html` — home + post list
- `about.html` — About me page
- `post.html` — renders a single post from Markdown
- `styles.css` — theme + styles
- `posts.js` — the list of posts (add an entry to publish)
- `script.js` — home page list + search + filters
- `*.md` — one Markdown file per post (e.g. `mathematics-of-trading-uncertainty.md`)
- `*.svg` — figures used in posts
- `randomness.py` — example downloadable attachment

## Adding a post

1. Create `my-slug.md` (plain Markdown). You can use:
   - maths: `$\sigma$` inline, `$$ ... $$` for a centred equation
   - images: `![caption](my-chart.svg)`  (file sits in the same folder)
   - code: fenced blocks with three backticks — highlighted automatically
   - attachments: `[Download](notes.pdf)` — .py/.ipynb/.csv/.pdf/.zip render as a button
   - references: a normal list of links
   Don't start with a big `#` title — the title comes from `posts.js`.
2. Add an entry to the top of the array in `posts.js`:

    {
      slug: "my-slug",          // must match the .md filename (without .md)
      title: "My Post Title",
      date: "2025-12-01",
      read: "4 min read",
      tags: ["trading", "math"]
    }

Commit both files and the live site updates within a minute.

## Notes

- Replace the `your-handle` placeholders (GitHub/LinkedIn) in the footer of
  `index.html` and the "Elsewhere" section of `about.html` with your real
  accounts. Edit files right on GitHub: tap a file, then the pencil icon, then commit.
- Swap the `ZH` avatar for a photo: in `about.html`, replace the avatar div with
  an `<img>` and upload the photo alongside the other files.
- Maths, code highlighting, and Markdown parsing load from CDNs in the reader's
  browser — needs internet, no accounts or keys.
