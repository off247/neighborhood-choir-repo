# The Neighborhood Choir — Design System

A small, opinionated design system for **The Neighborhood Choir**, a community choral group in Linden Hills / South Minneapolis. Built from scratch — there was no prior visual identity, codebase, or Figma file.

> **Sources used to build this system**
> - Brand brief provided by the user (values, voice, palette direction, materials list)
> - Established typographic choice: **Merriweather** lowercase wordmark already used in email headers
> - No codebase, Figma, photography, or existing logo were supplied — every asset in `assets/` was drawn for this system

---

## What this is

A folder of brand foundations, sample components, and ready-to-copy UI kits. Open `preview/` cards for quick visual reference, or pull tokens directly from `colors_and_type.css`.

The brand voice in one line: **warm, rooted, and human.** Neighbors making music together — not performing at Carnegie Hall, not building a platform.

---

## Index

| File / folder | What it is |
|---|---|
| `README.md` | This file. Brand context, content + visual fundamentals, iconography notes. |
| `colors_and_type.css` | Single source of truth for color, type, spacing, radius, shadow tokens. |
| `SKILL.md` | Agent-skill entry point. Load this if invoking the system from Claude Code. |
| `assets/` | Logo lockups, marks, generic illustration placeholders, favicons. |
| `fonts/` | Notes on web font loading (we use Google Fonts; no .ttfs bundled). |
| `preview/` | Small HTML cards that populate the project's Design System tab. |
| `ui_kits/website/` | Hi-fi recreation of the public-facing website (homepage, events, join, about). |
| `ui_kits/program/` | Print concert program layout. |
| `ui_kits/social_email/` | Instagram post templates, email newsletter header/footer. |

---

## Quick-start

```html
<link rel="stylesheet" href="colors_and_type.css">
<body>
  <h1 class="wordmark">the neighborhood choir</h1>
  <p>Come sing with us this fall. No experience necessary — just show up.</p>
</body>
```

---

## Content Fundamentals

The voice does most of the work in this brand. Read this section before writing anything that goes on a page.

### Tone

**Inclusive, grounded, gently joyful.** The choir believes in singing together but refuses to be precious about it. Earnestness without irony is welcome; warm humor is welcome. Fundraising-speak and religious framing are not.

### Casing

- **The choir's name is always lowercase: "the neighborhood choir."** This is non-negotiable — it carries the whole approachability of the brand.
- Headlines for other contexts (event titles, page headers) use sentence case, not title case. "Fall concert at Linden Hills Park" — not "Fall Concert at Linden Hills Park."
- All-caps is allowed sparingly for short overlines and labels (e.g. `SUMMER 2025`), tracked out wide.

### Person

- **We** for the choir collectively. "We've been making noise in Linden Hills…"
- **You** for the reader, warmly. "You don't need experience. You just need to want to sing."
- Avoid "our community of passionate vocalists" — it's exactly the wrong register.

### Specificity over abstraction

Name the neighborhood. Name the season. Name the building. Linden Hills Park, the church basement on 43rd, a Tuesday in October. Specificity is how warmth lands.

### Emoji

**Not used.** The brand voice carries the warmth; emoji would feel either corporate or twee. The one exception: a single `♪` or em-dash can punctuate a social caption.

### Length

Short. Most things should fit in two sentences. The web copy is built around the assumption that readers will skim.

### Voice examples

| ✅ Use | ❌ Avoid |
|---|---|
| "Come sing with us this fall. No experience necessary — just show up." | "Join our vibrant community of passionate vocalists as we lift our voices in song." |
| "We've been making noise in Linden Hills since before the pandemic. We're glad to be back." | "Founded in 2017, The Neighborhood Choir has a rich history of musical excellence." |
| "Rehearsals: Tuesdays, 7pm, the church basement on 43rd. Bring water." | "Weekly rehearsals are held in a convenient central location. Refreshments provided." |
| "Free, by donation, all welcome." | "Tickets are available at our suggested donation level." |
| "If you've been thinking about it, this is the season." | "Take the leap and discover your voice today!" |

### Tagline candidates

Working ideas — none locked in. The strongest two:
- **"sing with your neighbors."** — short, imperative, place-rooted
- **"the sound of showing up."** — captures the post-Covid restart energy without being heavy

Backup directions: *"a little more singing on the block."* / *"forty-third street, full voice."*

---

## Visual Foundations

### Palette philosophy

Earthy, warm, slightly muted. Every color in this system would feel at home in a cozy South Minneapolis bungalow in October: terracotta pots, the green of a linden tree, the gold of a porch light at dusk, cream-painted plaster. **No primary-color brightness, no tech-startup neon, no pure white or pure black.**

| Token | Hex | Name | Role |
|---|---|---|---|
| `--color-hearth` | `#bf6b4a` | **Hearth** | Primary terracotta. Logo, accents, links. |
| `--color-linden` | `#3f5742` | **Linden** | Secondary forest green. Headers, dark surfaces. |
| `--color-porchlight` | `#d9a648` | **Porchlight** | Accent warm gold. CTAs, highlight moments. |
| `--color-dusk` | `#9c7d85` | **Dusk** | Supporting dusty mauve. Tags, secondary surfaces. |
| `--color-page` | `#f5ede0` | **Page** | Primary canvas — warm cream. |
| `--color-paper` | `#faf6ee` | **Paper** | Lighter elevated surface. |
| `--color-ink` | `#2a2620` | **Ink** | Body text — warm charcoal, never `#000`. |
| `--color-ink-soft` | `#5a514a` | **Ink Soft** | Secondary text. |
| `--color-ink-quiet` | `#8a7f74` | **Ink Quiet** | Captions, metadata. |

Each primary color also has `-deep` (hover / pressed) and `-soft` (tint for large fills, badges, illustrations) variants. See `colors_and_type.css`.

### Typography

- **Merriweather** (Google Fonts) — the serif voice. Wordmark, headlines, display moments, pull quotes. Use 700 for headlines, 400 italic for quiet emphasis, 900 only on the largest display sizes.
- **Source Sans 3** (Google Fonts) — humanist sans for body, UI, captions, metadata. Generous leading (`1.55–1.7`). 400 for body, 600 for emphasis, 700 for buttons.

The pairing reads as literary-but-not-stuffy. Both are Google Fonts for accessibility on the website and zero-cost extension into newsletters.

**Rules**
- The choir name is **always lowercase, always Merriweather**, with `-0.015em` tracking. Do not condense, italicize, or stylize it.
- Generous leading everywhere — `1.55` minimum on body. The brand reads unhurried, not dense.
- No tight tracking on headlines. Slight negative tracking (`-0.01em`) on large display only.
- Do not use Merriweather Black at small sizes; it gets clotted. Black is for 48px+ display moments only.

### Spacing & rhythm

A 4px base scale: `4, 8, 12, 16, 24, 32, 48, 64, 96`. Body content sits in a `68ch` measure for comfortable reading. Pages cap at `1180px`. Whitespace is generous — let illustration and type breathe.

### Backgrounds

- The default canvas is **Page cream** (`#f5ede0`), not white. Cream is the brand's most identifiable surface choice.
- Sections may alternate Page ↔ Paper ↔ Linden (dark green) for rhythm. Hearth and Porchlight are accent surfaces only — never page backgrounds.
- No gradients. No patterns. No textures layered onto fills. The closest we come to texture is a hand-drawn paper-feel in illustrations themselves.
- Full-bleed illustration banners are encouraged for hero moments. Full-bleed photography is **not** part of this system (the brand is illustration-led).

### Illustration (primary visual language)

- Flat, lightly textured, hand-drawn feeling. Closer to an indie concert poster or thoughtful zine than a nonprofit annual report.
- Figures are diverse, abstract enough to feel universal — never portrait-realistic, never "blob people."
- Scenes of gathering: rehearsal rooms, outdoor performances, neighborhood streets, lake walks.
- Always uses the brand palette. Hearth, Linden, Porchlight, Dusk on Page or Paper grounds.
- No stock-illustration slickness. Visible imperfection is desirable.

**Prompt seed for AI tools:** *warm muted palette, hand-drawn texture, flat illustration, diverse abstract figures, community gathering, neighborhood setting, South Minneapolis, cream paper background, terracotta + forest green + warm gold accents*

### Borders, rules, and dividers

- Hairline rules in `--rule` (`#ece2d0`) — visible on cream but never loud.
- Cards have a 1px Ink-Soft border at `12%` opacity OR a soft shadow, not both.
- Avoid double rules. Avoid heavy dividers.

### Corner radii

- Modest, not pillowed: `4px` for inputs and tags, `8px` for buttons, `14px` for cards.
- Full pills (`999px`) only for small chip / tag elements.
- Nothing in the system is a sharp 0-radius rectangle except illustrations themselves (which feel cut from paper).

### Cards & elevation

Cards are paper on paper. Two valid card styles:

1. **Soft card** — Paper background, no border, `--shadow-md`. For featured content.
2. **Outlined card** — Page background, 1px Ink-Soft 12% border, no shadow. For dense lists.

Never both border + heavy shadow — it reads as a popup, not a piece of paper.

### Shadows

Shadows are quiet. `0 2px 8px rgba(42,38,32,0.08)` — small, low-spread, warm-tinted. Never colored. Never glow. We want paper-on-paper, not "floating glass."

### Animation & motion

- **Restrained and warm.** Fades and gentle slides, never bounces or springs.
- Default easing: `cubic-bezier(0.4, 0, 0.2, 1)` (ease-out feel) at `220ms`.
- Hover: 120ms opacity / color change only. No transforms.
- No parallax. No scroll-driven reveals. The brand isn't trying to wow you.

### Interaction states

- **Hover (links):** color shifts to `--color-hearth-deep`, underline thickness `1px → 2px`. No background change.
- **Hover (buttons):** background darkens by ~8% (Hearth → Hearth-deep). No scale change. No translate.
- **Pressed:** background darkens by ~14%, no shrink animation.
- **Focus:** 2px `--color-porchlight` outline at `2px` offset. Always visible — accessibility is non-negotiable.
- **Disabled:** 40% opacity, no pointer.

### Use of transparency / blur

- Avoid blur effects entirely. They read "tech."
- Transparency only for hairline borders (Ink-Soft at 8–12%) and subtle illustration shading.

### Layout rules

- Single column for editorial content, max `68ch`.
- Two-column for event lists or member directories.
- Generous top/bottom section padding (`var(--space-9)` = 96px).
- The wordmark always sits top-left, never centered. (Centered headers feel institutional.)

### What "warm" means in code

When in doubt: nudge toward `#2a2620` (Ink) rather than `#000`, and `#f5ede0` (Page) rather than `#fff`. Every color in the palette has a touch of orange-yellow in its OKLCH; nothing is cool or blue-tinted. **If a color looks "clinical," it's wrong.**

---

## Iconography

The Neighborhood Choir is **not an icon-heavy brand**. Most things in the UI are typographic or illustration-led. When icons are needed, the rules are:

- **Use [Lucide](https://lucide.dev) icons via CDN.** Lucide is the closest match to the brand's hand-drawn feel — round line caps, friendly proportions, 1.75px stroke. Linked, not bundled.
- **No icon fonts.** Inline SVG only.
- **Stroke weight is 1.75px** at 20–24px icon size. Do not mix stroke widths in one view.
- **Color** matches the surrounding text — Ink for body, Hearth for accent moments, Page-cream on Linden surfaces.
- **No filled icons.** Outline only — keeps the visual register consistent with illustration.

**Emoji are not used.** Unicode dingbats (`♪`, `★`, `❦`) may appear *inside body copy* in social captions only, never as UI elements.

**Logo / mark assets** in `assets/`:
- `wordmark.svg` — horizontal lockup, full lowercase wordmark
- `wordmark-stacked.svg` — stacked variant for square contexts
- `mark-arcs.svg` — concentric arcs mark (sound/togetherness reading)
- `mark-rooftops.svg` — neighborhood rooftops mark
- `mark-circle.svg` — circle-of-figures mark
- `favicon.svg` — single-letter mark for tabs

All marks work in one color on dark or light ground. Each is a candidate — the choir would pick one in production. We're shipping all three so the designer can A/B.

---

## Substitutions & open questions

This section flags choices that would benefit from human direction.

1. **Font files are not bundled.** All typefaces load from Google Fonts CDN. If the choir wants offline / print-friendly assets, drop `.ttf` files into `fonts/` and we'll wire local `@font-face`.
2. **Icon library is Lucide via CDN.** If the choir wants a more hand-drawn feel, [Hugeicons](https://hugeicons.com) or custom marks could replace it. Flagged.
3. **Three logo mark options** are included. We'd recommend `mark-arcs` as the primary — it reads as sound-without-being-a-music-note and as togetherness — but the designer should pick.
4. **No photography in the system.** Per the brief, illustration leads. If the choir wants a photo treatment guide (e.g. for rehearsal candids on Instagram), it would be a future addition.
