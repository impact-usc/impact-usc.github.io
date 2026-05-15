# USC IMPACT LAB Website

Jekyll starter website for USC IMPACT LAB, designed for GitHub Pages deployment at:

```text
https://impact-usc.github.io
```

## Structure

- `_config.yml` - site settings such as title, URL, email, and GitHub username
- `_layouts/default.html` - shared HTML page shell
- `_includes/header.html` - shared site header and navigation
- `_includes/footer.html` - shared footer
- `_data/research.yml` - homepage research theme cards
- `_data/projects.yml` - homepage project summaries
- `_data/people.yml` - lab member cards
- `_data/publications.yml` - selected publications
- `_data/news.yml` - news items
- `index.html` - homepage content
- `human-centered-ai.md` - Human-Centered AI research page
- `styles.css` - responsive layout and USC-inspired visual system
- `script.js` - mobile navigation behavior
- `assets/` - logo, favicon, and visual assets

## Updating Content

Most routine updates should happen in `_data/`:

- Add lab members in `_data/people.yml`
- Add papers in `_data/publications.yml`
- Add news in `_data/news.yml`
- Add project blurbs in `_data/projects.yml`
- Add research themes in `_data/research.yml`

Long-form pages can be edited directly:

- Homepage: `index.html`
- Human-Centered AI: `human-centered-ai.md`

Images can go in `assets/` or a future folder such as `assets/images/people/`.

## Logo

The site now uses the provided logo file:

```text
assets/impact-lab-logo.png
```

If you export a sharper or transparent version later, replace that file with the same filename and the site will pick it up automatically.

## Local Preview

macOS's built-in Ruby is too old for modern Jekyll. If `ruby -v` shows Ruby 2.6,
install a newer Ruby first:

```bash
brew install ruby
```

Then follow Homebrew's shell setup instructions so the `ruby` and `bundle` commands point to the
Homebrew version.

Install dependencies:

```bash
bundle install
```

Run the site locally:

```bash
bundle exec jekyll serve
```

Then open:

```text
http://127.0.0.1:4000
```

## GitHub Pages Deployment

Push this repository to:

```text
https://github.com/impact-usc/impact-usc.github.io
```

In GitHub, open **Settings > Pages** and set **Build and deployment** to **GitHub Actions**.
The workflow in `.github/workflows/pages.yml` will build and publish the site.
