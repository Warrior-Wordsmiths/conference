# Website Style Guide Reference
*Based on examples/e1.html and examples/e2.html*

## Overview

This style guide documents the design system used in the Creatio WordPress theme. The system is built on WordPress block-based architecture using CSS custom properties (CSS variables) for theming, fluid responsive typography with `clamp()` functions, and modern layout techniques using Flexbox and Grid. The primary font families are **Inter** (sans-serif) for body text and UI elements, and **Literata** (serif) for display purposes.

---

## 1. Color Palette

### Primary Brand Colors

| Color Name | CSS Variable | Hex Value | Usage |
|------------|-------------|-----------|-------|
| Primary | `--wp--preset--color--primary` | `#11181F` | Headings, site title, primary text elements |
| Secondary | `--wp--preset--color--secondary` | `#005ae1` | Links, buttons (hover state), accents |
| Foreground | `--wp--preset--color--foreground` | `#474747` | Body text, secondary text elements |
| Background | `--wp--preset--color--background` | `#ffffff` | Page background, button text |
| Tertiary | `--wp--preset--color--tertiary` | `#f7f9fd` | Subtle backgrounds, category badges |

### Neutral Colors

| Color Name | CSS Variable | Hex Value |
|------------|-------------|-----------|
| Black | `--wp--preset--color--black` | `#000000` |
| White | `--wp--preset--color--white` | `#ffffff` |
| Cyan Bluish Gray | `--wp--preset--color--cyan-bluish-gray` | `#abb8c3` |

### Accent Colors

| Color Name | CSS Variable | Hex Value |
|------------|-------------|-----------|
| Pale Pink | `--wp--preset--color--pale-pink` | `#f78da7` |
| Vivid Red | `--wp--preset--color--vivid-red` | `#cf2e2e` |
| Luminous Vivid Orange | `--wp--preset--color--luminous-vivid-orange` | `#ff6900` |
| Luminous Vivid Amber | `--wp--preset--color--luminous-vivid-amber` | `#fcb900` |
| Light Green Cyan | `--wp--preset--color--light-green-cyan` | `#7bdcb5` |
| Vivid Green Cyan | `--wp--preset--color--vivid-green-cyan` | `#00d084` |
| Pale Cyan Blue | `--wp--preset--color--pale-cyan-blue` | `#8ed1fc` |
| Vivid Cyan Blue | `--wp--preset--color--vivid-cyan-blue` | `#0693e3` |
| Vivid Purple | `--wp--preset--color--vivid-purple` | `#9b51e0` |

### Gradient Presets

```css
--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgb(6,147,227) 0%,rgb(155,81,224) 100%);
--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);
--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgb(252,185,0) 0%,rgb(255,105,0) 100%);
--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgb(255,105,0) 0%,rgb(207,46,46) 100%);
--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);
--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);
--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);
--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);
--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);
--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);
--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);
--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);
```

### CSS Color Utility Classes

Colors can be applied using these utility classes:

**Text Colors:**
- `.has-primary-color` - Primary color text
- `.has-secondary-color` - Secondary color text
- `.has-foreground-color` - Foreground color text
- `.has-background-color` - Background color text
- `.has-tertiary-color` - Tertiary color text

**Background Colors:**
- `.has-primary-background-color` - Primary background
- `.has-secondary-background-color` - Secondary background
- `.has-tertiary-background-color` - Tertiary background
- `.has-background-background-color` - White background

**Border Colors:**
- `.has-primary-border-color` - Primary border
- `.has-secondary-border-color` - Secondary border

---

## 2. Typography System

### Font Families

**Primary Fonts:**
```css
--wp--preset--font-family--inter: Inter;
--wp--preset--font-family--literata: Literata;
--wp--preset--font-family--literata-60-pt: Literata 60pt;
```

**Available Font Families (Full List):**
The system includes 60+ Google Fonts families available via CSS variables:
- Sans-serif: Inter, Albert Sans, DM Sans, IBM Plex Sans, Montserrat, Open Sans, Poppins, Raleway, Roboto, Work Sans, etc.
- Serif: Literata, Alegreya, Crimson Pro, EB Garamond, Libre Baskerville, Lora, Merriweather, Playfair Display, PT Serif, etc.
- Monospace: Courier Prime, DM Mono, IBM Plex Mono, Space Mono, etc.

### Font Size Scale

```css
/* Responsive font sizes using clamp() */
--wp--preset--font-size--small: clamp(0.825rem, 0.825rem + ((1vw - 0.2rem) * 0.433), 1.0625rem);
--wp--preset--font-size--medium: clamp(1rem, 1rem + ((1vw - 0.2rem) * 0.455), 1.25rem);
--wp--preset--font-size--large: clamp(1.75rem, 1.75rem + ((1vw - 0.2rem) * 0.455), 2rem);
--wp--preset--font-size--x-large: clamp(2.5rem, 2.5rem + ((1vw - 0.2rem) * 0.909), 3rem);
```

**Font Size Range:**
- `small`: 0.825rem - 1.0625rem (13.2px - 17px)
- `medium`: 1rem - 1.25rem (16px - 20px)
- `large`: 1.75rem - 2rem (28px - 32px)
- `x-large`: 2.5rem - 3rem (40px - 48px)

### Body Text Styles

```css
body {
  background-color: var(--wp--preset--color--background);
  color: var(--wp--preset--color--foreground);
  font-family: var(--wp--preset--font-family--inter);
  font-size: var(--wp--preset--font-size--small);
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
}
```

### Heading Styles

All headings share these base styles:
```css
h1, h2, h3, h4, h5, h6 {
  font-family: var(--wp--preset--font-family--inter);
  font-style: normal;
  font-weight: 700;
  line-height: 1.2;
}

:root :where(.wp-block-heading) {
  color: var(--wp--preset--color--primary);
}

:root :where(.wp-block-heading a:where(:not(.wp-element-button))) {
  color: var(--wp--preset--color--primary);
}
```

**Individual Heading Sizes:**
```css
h1 {
  font-size: clamp(1.743rem, 1.743rem + ((1vw - 0.2rem) * 2.285), 3rem);
  /* Range: 27.9px - 48px */
}

h2 {
  font-size: clamp(1.563rem, 1.563rem + ((1vw - 0.2rem) * 1.931), 2.625rem);
  /* Range: 25px - 42px */
}

h3 {
  font-size: clamp(1.378rem, 1.378rem + ((1vw - 0.2rem) * 1.585), 2.25rem);
  /* Range: 22px - 36px */
}

h4 {
  font-size: clamp(1.185rem, 1.185rem + ((1vw - 0.2rem) * 1.255), 1.875rem);
  /* Range: 19px - 30px */
}

h5 {
  font-size: clamp(0.875rem, 0.875rem + ((1vw - 0.2rem) * 0.682), 1.25rem);
  /* Range: 14px - 20px */
}

h6 {
  font-size: var(--wp--preset--font-size--small);
  /* Range: 0.825rem - 1.0625rem */
}
```

### Special Typography Patterns

**Site Title:**
```css
:root :where(.wp-block-site-title) {
  font-family: var(--wp--preset--font-family--literata);
  font-size: clamp(1.146rem, 1.146rem + ((1vw - 0.2rem) * 1.189), 1.8rem);
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.06rem;
}

:root :where(.wp-block-site-title a:where(:not(.wp-element-button))) {
  color: var(--wp--preset--color--primary);
  text-decoration: none;
}

:root :where(.wp-block-site-title a:where(:not(.wp-element-button)):hover) {
  color: var(--wp--preset--color--foreground);
  text-decoration: underline;
}
```

**Post Title:**
```css
:root :where(.wp-block-post-title) {
  color: var(--wp--preset--color--primary);
  margin-bottom: 0;
}

:root :where(.wp-block-post-title a:where(:not(.wp-element-button))) {
  color: var(--wp--preset--color--primary);
  text-decoration: none;
}

:root :where(.wp-block-post-title a:where(:not(.wp-element-button)):hover) {
  color: var(--wp--preset--color--secondary);
  text-decoration: underline;
}
```

**Post Date:**
```css
:root :where(.wp-block-post-date) {
  color: var(--wp--preset--color--foreground);
  font-size: 0.7rem;
  letter-spacing: 0.03rem;
  text-transform: uppercase;
}

:root :where(.wp-block-post-date a:where(:not(.wp-element-button))) {
  text-decoration: none;
}

:root :where(.wp-block-post-date a:where(:not(.wp-element-button)):hover) {
  text-decoration: underline;
}
```

**Post Terms (Categories/Tags):**
```css
:root :where(.wp-block-post-terms) {
  font-size: 0.8rem;
}
```

**Navigation:**
```css
:root :where(.wp-block-navigation) {
  font-size: var(--wp--preset--font-size--small);
}

:root :where(.wp-block-navigation a:where(:not(.wp-element-button))) {
  text-decoration: none;
}

:root :where(.wp-block-navigation a:where(:not(.wp-element-button)):hover) {
  text-decoration: underline;
}
```

**Post Navigation Links:**
```css
:root :where(.wp-block-post-navigation-link) {
  font-family: var(--wp--preset--font-family--literata);
}
```

### Link Styles

```css
a:where(:not(.wp-element-button)) {
  color: var(--wp--preset--color--secondary);
  text-decoration: underline;
}

:root :where(a:where(:not(.wp-element-button)):hover) {
  color: var(--wp--preset--color--primary);
  text-decoration: none;
}
```

---

## 3. Spacing System

### Spacing Scale

```css
--wp--preset--spacing--20: 0.44rem;    /* 7.04px */
--wp--preset--spacing--30: 0.5rem;     /* 8px */
--wp--preset--spacing--40: 1rem;       /* 16px */
--wp--preset--spacing--50: clamp(1.5rem, 2.4096386vw, 2.0rem);    /* 24px - 32px */
--wp--preset--spacing--60: clamp(1.5rem, 3.6144578vw, 3.0rem);    /* 24px - 48px */
--wp--preset--spacing--70: clamp(2.0rem, 4.8192771vw, 4.0rem);    /* 32px - 64px */
--wp--preset--spacing--80: clamp(3.0rem, 7.2289157vw, 6.0rem);    /* 48px - 96px */
```

### Global Padding

```css
body {
  --wp--style--root--padding-top: 0px;
  --wp--style--root--padding-right: 40px;
  --wp--style--root--padding-bottom: 0px;
  --wp--style--root--padding-left: 40px;
}
```

### Block Gap (Vertical Spacing)

```css
:root {
  --wp--style--block-gap: var(--wp--preset--spacing--50);
}

/* Flow layout */
:root :where(.is-layout-flow) > * {
  margin-block-start: var(--wp--preset--spacing--50);
  margin-block-end: 0;
}

/* Constrained layout */
:root :where(.is-layout-constrained) > * {
  margin-block-start: var(--wp--preset--spacing--50);
  margin-block-end: 0;
}

/* Flex layout */
:root :where(.is-layout-flex) {
  gap: var(--wp--preset--spacing--50);
}

/* Grid layout */
:root :where(.is-layout-grid) {
  gap: var(--wp--preset--spacing--50);
}
```

### Common Padding Patterns

**Header Section:**
```css
padding-top: var(--wp--preset--spacing--60);
padding-bottom: var(--wp--preset--spacing--60);
```

**Content Areas:**
```css
padding-top: 40px;
padding-right: 40px;
padding-bottom: 40px;
padding-left: 40px;
```

**Category Badges:**
```css
padding-top: 6px;
padding-right: 6px;
padding-bottom: 6px;
padding-left: 6px;
```

**Post Title Wrapper:**
```css
padding-top: 20px;
padding-bottom: 20px;
```

### Common Margin Patterns

**Comments Section:**
```css
margin-top: var(--wp--preset--spacing--70);
```

**Site Blocks (Removes gap between top-level blocks):**
```css
:where(.wp-site-blocks) > * {
  margin-block-start: 0;
  margin-block-end: 0;
}
```

**Alignment Margins:**
```css
.wp-site-blocks > .alignleft {
  float: left;
  margin-right: 2em;
}

.wp-site-blocks > .alignright {
  float: right;
  margin-left: 2em;
}

.wp-site-blocks > .aligncenter {
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}
```

---

## 4. Borders

### Border Radius Values

```css
/* Buttons */
border-radius: 5px;       /* Secondary buttons */
border-radius: 0.25rem;   /* Primary buttons (4px) */

/* Category badges */
border-radius: 4px;

/* Images */
border-radius: 2px;
```

**Border Radius CSS:**
```css
:root :where(.wp-block-button .wp-block-button__link) {
  border-radius: 5px;
}

:root :where(.wp-element-button, .wp-block-button__link) {
  border-radius: 0.25rem;
}

:root :where(.wp-block-image img, .wp-block-image .wp-block-image__crop-area, .wp-block-image .components-placeholder) {
  border-radius: 2px;
}
```

### Border Styles

**Default Border (for inputs and forms):**
```css
border: 1px solid #949494;
```

**Submenu Containers:**
```css
border: 1px solid #00000026; /* rgba(0, 0, 0, 0.15) */
```

### Outline Patterns

**Button Focus State:**
```css
:root :where(.wp-element-button:focus, .wp-block-button__link:focus) {
  outline-color: var(--wp--preset--color--primary);
  outline-offset: 2px;
  outline-style: dotted;
  outline-width: 1px;
}
```

---

## 5. Component Patterns

### Buttons

**Primary Button (Default):**
```html
<div class="wp-block-button">
  <a class="wp-block-button__link wp-element-button" href="#">Button Text</a>
</div>
```

**CSS:**
```css
:root :where(.wp-element-button, .wp-block-button__link) {
  background-color: var(--wp--preset--color--primary);
  border-radius: 0.25rem;
  border-width: 0;
  color: var(--wp--preset--color--background);
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  padding-top: calc(0.667em + 2px);
  padding-right: calc(1.333em + 2px);
  padding-bottom: calc(0.667em + 2px);
  padding-left: calc(1.333em + 2px);
  text-decoration: none;
  text-transform: inherit;
}

/* Hover state */
:root :where(.wp-element-button:hover, .wp-block-button__link:hover) {
  background-color: var(--wp--preset--color--secondary);
  color: var(--wp--preset--color--background);
}

/* Focus state */
:root :where(.wp-element-button:focus, .wp-block-button__link:focus) {
  background-color: var(--wp--preset--color--primary);
  color: var(--wp--preset--color--background);
  outline-color: var(--wp--preset--color--primary);
  outline-offset: 2px;
  outline-style: dotted;
  outline-width: 1px;
}

/* Active state */
:root :where(.wp-element-button:active, .wp-block-button__link:active) {
  background-color: var(--wp--preset--color--primary);
  color: var(--wp--preset--color--background);
}
```

**Secondary Button:**
```css
:root :where(.wp-block-button .wp-block-button__link) {
  background-color: var(--wp--preset--color--secondary);
  border-radius: 5px;
}
```

### Navigation

**Main Navigation:**
```html
<nav class="wp-block-navigation is-content-justification-flex-end is-layout-flex wp-block-navigation-is-layout-flex" aria-label="Main">
  <ul class="wp-block-navigation__container">
    <li class="wp-block-navigation-item">
      <a class="wp-block-navigation-item__content" href="#">Link Text</a>
    </li>
  </ul>
</nav>
```

**Responsive Navigation Container:**
```html
<div class="wp-block-navigation__responsive-container has-text-color has-background-color has-background has-secondary-background-color">
  <div class="wp-block-navigation__responsive-close">
    <div class="wp-block-navigation__responsive-dialog">
      <button aria-label="Close menu" class="wp-block-navigation__responsive-container-close">
        <!-- Close icon SVG -->
      </button>
      <div class="wp-block-navigation__responsive-container-content">
        <!-- Navigation items -->
      </div>
    </div>
  </div>
</div>
```

### Site Title

**HTML:**
```html
<h1 class="wp-block-site-title">
  <a href="/" target="_self" rel="home">Site Name</a>
</h1>
```

**CSS (already documented in Typography section):**
```css
:root :where(.wp-block-site-title) {
  font-family: var(--wp--preset--font-family--literata);
  font-size: clamp(1.146rem, 1.146rem + ((1vw - 0.2rem) * 1.189), 1.8rem);
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.06rem;
}
```

### Post Title

**HTML:**
```html
<h2 style="font-style:normal;font-weight:400;letter-spacing:-0.03rem; padding-top:20px;padding-bottom:20px;"
    class="has-text-align-center wp-block-post-title has-x-large-font-size has-literata-font-family">
  Post Title Here
</h2>
```

### Post Meta (Date/Author)

**HTML:**
```html
<div class="wp-block-group is-content-justification-center is-nowrap is-layout-flex wp-block-group-is-layout-flex"
     style="padding-bottom:20px;font-size:0.7rem;letter-spacing:0.03rem;text-transform:uppercase">
  <p>Published by</p>

  <div class="wp-block-post-author">
    <div class="wp-block-post-author__content">
      <p class="wp-block-post-author__name">Author Name</p>
    </div>
  </div>

  <p>on</p>

  <div class="wp-block-post-date">
    <time datetime="2021-12-01T22:22:49+00:00">
      <a href="#">December 1, 2021</a>
    </time>
  </div>
</div>
```

**CSS:**
```css
.wp-block-post-author {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}

.wp-block-post-author__content {
  flex-basis: 0;
  flex-grow: 1;
}

.wp-block-post-author__name {
  margin: 0;
}
```

### Category Badge

**HTML:**
```html
<div class="wp-block-group has-tertiary-background-color has-background is-content-justification-center is-layout-flex wp-block-group-is-layout-flex"
     style="border-radius:4px">
  <div style="font-size:0.8rem;text-transform:uppercase;padding-top:6px;padding-right:6px;padding-bottom:6px;padding-left:6px"
       class="taxonomy-category wp-block-post-terms">
    <a href="#" rel="tag">Category Name</a>
  </div>
</div>
```

### Lists

**HTML:**
```html
<ul class="wp-block-list">
  <li>List item one</li>
  <li>List item two</li>
  <li>List item three</li>
</ul>

<ol class="wp-block-list">
  <li>Ordered item one</li>
  <li>Ordered item two</li>
</ol>
```

**CSS:**
```css
:root :where(.wp-block-list) {
  padding-left: var(--wp--preset--spacing--70);
}

ol, ul {
  box-sizing: border-box;
}

:root :where(.wp-block-list.has-background) {
  padding: 1.25em 2.375em;
}
```

### Headings

**HTML:**
```html
<h2 class="wp-block-heading" id="section-id">Heading Text</h2>
```

### Spacer

**HTML:**
```html
<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
```

**CSS:**
```css
.wp-block-spacer {
  clear: both;
}
```

### Group Container

**Basic Group:**
```html
<div class="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
  <!-- Content -->
</div>
```

**Group with Background:**
```html
<div class="wp-block-group has-background has-global-padding is-layout-constrained wp-block-group-is-layout-constrained"
     style="background-color:#ffffff">
  <!-- Content -->
</div>
```

**Group with Flexbox:**
```html
<div class="wp-block-group is-content-justification-space-between is-layout-flex wp-block-group-is-layout-flex">
  <!-- Content -->
</div>
```

### Post Content Container

**HTML:**
```html
<div class="wp-block-group alignfull has-global-padding is-layout-constrained wp-block-group-is-layout-constrained"
     style="padding-top:40px;padding-right:40px;padding-bottom:40px;padding-left:40px">
  <div class="entry-content wp-block-post-content has-global-padding is-layout-constrained wp-block-post-content-is-layout-constrained">
    <!-- Post content here -->
  </div>
</div>
```

### Comments Section

**HTML:**
```html
<div class="wp-block-comments" style="margin-top:var(--wp--preset--spacing--70)">
  <!-- Comments display -->
</div>
```

**Comment Form:**
```html
<form action="#" method="post" id="commentform" class="comment-form">
  <!-- Form fields -->
</form>
```

**CSS:**
```css
.wp-block-post-comments {
  box-sizing: border-box;
}

.wp-block-post-comments .commentlist {
  clear: both;
  list-style: none;
  margin: 0;
  padding: 0;
}

.wp-block-post-comments input:not([type=submit]),
.wp-block-post-comments textarea {
  border: 1px solid #949494;
  font-family: inherit;
  font-size: 1em;
}

.wp-block-post-comments input:not([type=submit]):not([type=checkbox]),
.wp-block-post-comments textarea {
  padding: calc(.667em + 2px);
}
```

---

## 6. Layout System

### Layout Types

**Flow Layout:**
```html
<div class="is-layout-flow wp-block-group-is-layout-flow">
  <!-- Vertical stacking with block gap -->
</div>
```

**Constrained Layout:**
```html
<div class="is-layout-constrained wp-block-group-is-layout-constrained">
  <!-- Content constrained to max-width -->
</div>
```

**Flex Layout:**
```html
<div class="is-layout-flex wp-block-group-is-layout-flex">
  <!-- Horizontal flexbox layout -->
</div>
```

**Grid Layout:**
```html
<div class="is-layout-grid wp-block-group-is-layout-grid">
  <!-- CSS Grid layout -->
</div>
```

### Container Widths

```css
:root {
  --wp--style--global--content-size: 620px;
  --wp--style--global--wide-size: 1200px;
}

.is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)) {
  max-width: var(--wp--style--global--content-size);
  margin-left: auto !important;
  margin-right: auto !important;
}

.is-layout-constrained > .alignwide {
  max-width: var(--wp--style--global--wide-size);
}
```

### Alignment Classes

**alignwide:**
```html
<div class="wp-block-group alignwide">
  <!-- Content up to 1200px wide -->
</div>
```

**alignfull:**
```html
<div class="wp-block-group alignfull">
  <!-- Full width content -->
</div>
```

**has-text-align-center:**
```html
<h2 class="has-text-align-center wp-block-heading">Centered Text</h2>
```

### Flex Layout Patterns

**Space Between:**
```css
.wp-container-core-group-is-layout-8b7427ff {
  justify-content: space-between;
}
```

**Center Content:**
```css
.wp-container-core-group-is-layout-a89b3969 {
  justify-content: center;
}
```

**Nowrap with Gap:**
```css
.wp-container-core-group-is-layout-e13ac5b4 {
  flex-wrap: nowrap;
  gap: 40px;
}
```

**Flex-end Alignment:**
```css
.wp-container-core-navigation-is-layout-aa60f3ea {
  justify-content: flex-end;
}
```

### Global Padding

```css
.wp-site-blocks {
  padding-top: var(--wp--style--root--padding-top);
  padding-bottom: var(--wp--style--root--padding-bottom);
}

.has-global-padding {
  padding-right: var(--wp--style--root--padding-right);
  padding-left: var(--wp--style--root--padding-left);
}

.has-global-padding > .alignfull {
  margin-right: calc(var(--wp--style--root--padding-right) * -1);
  margin-left: calc(var(--wp--style--root--padding-left) * -1);
}
```

### Responsive Behavior

The design system uses `clamp()` for responsive values:

**How clamp() works:**
```css
/* clamp(minimum, preferred, maximum) */
font-size: clamp(1rem, 1rem + ((1vw - 0.2rem) * 0.455), 1.25rem);
```

This creates fluid scaling between minimum and maximum values based on viewport width.

---

## 7. Usage Examples

### Building a Standard Page Header

```html
<header class="wp-block-template-part">
  <div class="wp-block-group has-background has-global-padding is-layout-constrained wp-block-group-is-layout-constrained"
       style="background-color:#ffffff">
    <div class="wp-block-group alignwide is-content-justification-space-between is-layout-flex wp-block-group-is-layout-flex"
         style="padding-top:var(--wp--preset--spacing--60);padding-right:0px;padding-bottom:var(--wp--preset--spacing--60);padding-left:0px">

      <!-- Logo/Site Title -->
      <div class="wp-block-group is-layout-flex wp-block-group-is-layout-flex">
        <div class="wp-block-group is-layout-flow wp-block-group-is-layout-flow">
          <h1 class="wp-block-site-title">
            <a href="/" target="_self" rel="home">Site Name</a>
          </h1>
        </div>
      </div>

      <!-- Navigation -->
      <div class="wp-block-group is-nowrap is-layout-flex wp-block-group-is-layout-flex">
        <nav class="wp-block-navigation is-content-justification-flex-end is-layout-flex wp-block-navigation-is-layout-flex">
          <ul class="wp-block-navigation__container">
            <li class="wp-block-navigation-item">
              <a class="wp-block-navigation-item__content" href="/about">About</a>
            </li>
            <li class="wp-block-navigation-item">
              <a class="wp-block-navigation-item__content" href="/blog">Blog</a>
            </li>
            <li class="wp-block-navigation-item">
              <a class="wp-block-navigation-item__content" href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

    </div>
  </div>
</header>
```

### Creating a Content Section with Post Title and Meta

```html
<div class="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained"
     style="padding-top:60px;padding-right:40px;padding-left:40px">

  <!-- Category Badge -->
  <div class="wp-block-template-part">
    <div class="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
      <div class="wp-block-group is-content-justification-center is-nowrap is-layout-flex wp-block-group-is-layout-flex">
        <div class="wp-block-group has-tertiary-background-color has-background is-content-justification-center is-layout-flex wp-block-group-is-layout-flex"
             style="border-radius:4px">
          <div style="font-size:0.8rem;text-transform:uppercase;padding-top:6px;padding-right:6px;padding-bottom:6px;padding-left:6px"
               class="taxonomy-category wp-block-post-terms">
            <a href="/category/news" rel="tag">News</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Post Title -->
  <h2 style="font-style:normal;font-weight:400;letter-spacing:-0.03rem; padding-top:20px;padding-bottom:20px;"
      class="has-text-align-center wp-block-post-title has-x-large-font-size has-literata-font-family">
    Your Post Title Here
  </h2>

  <!-- Post Meta -->
  <div class="wp-block-template-part">
    <div class="wp-block-group is-content-justification-center is-nowrap is-layout-flex wp-block-group-is-layout-flex"
         style="padding-bottom:20px;font-size:0.7rem;letter-spacing:0.03rem;text-transform:uppercase">
      <p>Published by</p>

      <div class="wp-block-post-author">
        <div class="wp-block-post-author__content">
          <p class="wp-block-post-author__name">John Doe</p>
        </div>
      </div>

      <p>on</p>

      <div class="wp-block-post-date">
        <time datetime="2025-12-10T10:00:00+00:00">
          <a href="#">December 10, 2025</a>
        </time>
      </div>
    </div>
  </div>

</div>
```

### Styling a Button

**HTML:**
```html
<div class="wp-block-buttons">
  <div class="wp-block-button">
    <a class="wp-block-button__link wp-element-button" href="/signup">
      Get Started
    </a>
  </div>
</div>
```

The button will automatically receive:
- Primary color background (`#11181F`)
- White text
- Border radius of `0.25rem`
- Responsive padding
- Hover state with secondary color (`#005ae1`)

### Creating a Two-Column Layout

```html
<div class="wp-block-group alignwide is-content-justification-space-between is-layout-flex wp-block-group-is-layout-flex">

  <!-- Left Column -->
  <div class="wp-block-group is-layout-flow wp-block-group-is-layout-flow">
    <h3>Column One</h3>
    <p>Content for the first column goes here.</p>
  </div>

  <!-- Right Column -->
  <div class="wp-block-group is-layout-flow wp-block-group-is-layout-flow">
    <h3>Column Two</h3>
    <p>Content for the second column goes here.</p>
  </div>

</div>
```

### Building a Post Content Area

```html
<div class="wp-block-group alignfull has-global-padding is-layout-constrained wp-block-group-is-layout-constrained"
     style="padding-top:40px;padding-right:40px;padding-bottom:40px;padding-left:40px">

  <div class="entry-content wp-block-post-content has-global-padding is-layout-constrained wp-block-post-content-is-layout-constrained">

    <h2 class="wp-block-heading" id="section-one">First Section</h2>

    <p>Paragraph text goes here with proper line height and Inter font family.</p>

    <ul class="wp-block-list">
      <li>List item with proper padding-left spacing</li>
      <li>Another list item</li>
      <li>Third list item</li>
    </ul>

    <h3 class="wp-block-heading" id="subsection">Subsection</h3>

    <p>More paragraph content. Links will automatically be <a href="#">styled with secondary color</a> and underline.</p>

    <div class="wp-block-buttons">
      <div class="wp-block-button">
        <a class="wp-block-button__link wp-element-button" href="#">
          Call to Action
        </a>
      </div>
    </div>

  </div>

</div>
```

---

## Quick Reference

### Most Common Values

| Property | Value |
|----------|-------|
| Primary color | `#11181F` or `var(--wp--preset--color--primary)` |
| Secondary color | `#005ae1` or `var(--wp--preset--color--secondary)` |
| Body font | `Inter` or `var(--wp--preset--font-family--inter)` |
| Display font | `Literata` or `var(--wp--preset--font-family--literata)` |
| Body font size | `clamp(0.825rem, 0.825rem + ((1vw - 0.2rem) * 0.433), 1.0625rem)` |
| Content width | `620px` |
| Wide width | `1200px` |
| Standard padding | `40px` |
| Button radius | `5px` or `0.25rem` |
| Line height (body) | `1.6` |
| Line height (headings) | `1.2` |
| Global padding left/right | `40px` |
| Block gap | `var(--wp--preset--spacing--50)` |

### CSS Variables Cheatsheet

**Colors:**
```css
var(--wp--preset--color--primary)      /* #11181F */
var(--wp--preset--color--secondary)    /* #005ae1 */
var(--wp--preset--color--foreground)   /* #474747 */
var(--wp--preset--color--background)   /* #ffffff */
var(--wp--preset--color--tertiary)     /* #f7f9fd */
```

**Fonts:**
```css
var(--wp--preset--font-family--inter)      /* Body text */
var(--wp--preset--font-family--literata)   /* Display text */
var(--wp--preset--font-size--small)        /* 0.825rem - 1.0625rem */
var(--wp--preset--font-size--medium)       /* 1rem - 1.25rem */
var(--wp--preset--font-size--large)        /* 1.75rem - 2rem */
var(--wp--preset--font-size--x-large)      /* 2.5rem - 3rem */
```

**Spacing:**
```css
var(--wp--preset--spacing--20)    /* 0.44rem */
var(--wp--preset--spacing--30)    /* 0.5rem */
var(--wp--preset--spacing--40)    /* 1rem */
var(--wp--preset--spacing--50)    /* clamp(1.5rem, 2.4096386vw, 2.0rem) */
var(--wp--preset--spacing--60)    /* clamp(1.5rem, 3.6144578vw, 3.0rem) */
var(--wp--preset--spacing--70)    /* clamp(2.0rem, 4.8192771vw, 4.0rem) */
var(--wp--preset--spacing--80)    /* clamp(3.0rem, 7.2289157vw, 6.0rem) */
```

**Layout:**
```css
var(--wp--style--global--content-size)    /* 620px */
var(--wp--style--global--wide-size)       /* 1200px */
var(--wp--style--block-gap)               /* var(--wp--preset--spacing--50) */
```

**Root Padding:**
```css
var(--wp--style--root--padding-top)       /* 0px */
var(--wp--style--root--padding-right)     /* 40px */
var(--wp--style--root--padding-bottom)    /* 0px */
var(--wp--style--root--padding-left)      /* 40px */
```

### Shadow Presets

```css
var(--wp--preset--shadow--natural)    /* 6px 6px 9px rgba(0, 0, 0, 0.2) */
var(--wp--preset--shadow--deep)       /* 12px 12px 50px rgba(0, 0, 0, 0.4) */
var(--wp--preset--shadow--sharp)      /* 6px 6px 0px rgba(0, 0, 0, 0.2) */
var(--wp--preset--shadow--outlined)   /* 6px 6px 0px -3px rgb(255, 255, 255), 6px 6px rgb(0, 0, 0) */
var(--wp--preset--shadow--crisp)      /* 6px 6px 0px rgb(0, 0, 0) */
```

### Aspect Ratio Presets

```css
var(--wp--preset--aspect-ratio--square)    /* 1 */
var(--wp--preset--aspect-ratio--4-3)       /* 4/3 */
var(--wp--preset--aspect-ratio--3-4)       /* 3/4 */
var(--wp--preset--aspect-ratio--3-2)       /* 3/2 */
var(--wp--preset--aspect-ratio--2-3)       /* 2/3 */
var(--wp--preset--aspect-ratio--16-9)      /* 16/9 */
var(--wp--preset--aspect-ratio--9-16)      /* 9/16 */
```

---

## Implementation Notes

### WordPress Block Classes

All WordPress blocks follow this naming pattern:
- `.wp-block-{block-name}` - Base block class
- `.wp-block-{block-name}-is-layout-{type}` - Layout variant

### Layout Class Patterns

- `.is-layout-flow` - Vertical stacking
- `.is-layout-constrained` - Constrained width
- `.is-layout-flex` - Flexbox
- `.is-layout-grid` - CSS Grid

### Alignment Classes

- `.alignwide` - Wide width (1200px)
- `.alignfull` - Full width
- `.has-text-align-center` - Centered text
- `.has-text-align-left` - Left-aligned text
- `.has-text-align-right` - Right-aligned text

### Flex Justification Classes

- `.is-content-justification-left` - `justify-content: flex-start`
- `.is-content-justification-center` - `justify-content: center`
- `.is-content-justification-right` - `justify-content: flex-end`
- `.is-content-justification-space-between` - `justify-content: space-between`

### Special Modifiers

- `.has-global-padding` - Applies root padding
- `.has-background` - Indicates element has background color
- `.is-nowrap` - Prevents flex wrapping
- `.alignwide` - Extends to wide width

---

## Best Practices

1. **Always use CSS variables** for colors, fonts, and spacing when possible
2. **Use clamp() for responsive typography** - it's already built into the presets
3. **Leverage the spacing scale** - use `--wp--preset--spacing--*` variables for consistency
4. **Maintain the 1.6 line-height** for body text and 1.2 for headings
5. **Use semantic HTML** - proper heading hierarchy and block structure
6. **Apply layout classes consistently** - use the WordPress block layout system
7. **Test responsive behavior** - the clamp() values scale automatically
8. **Use the tertiary color** for subtle backgrounds and accents
9. **Keep button styles consistent** - use the predefined button component
10. **Respect the content width** (620px) and wide width (1200px) constraints

---

## Browser Support

The design system uses modern CSS features:
- CSS Custom Properties (CSS Variables)
- CSS clamp()
- Flexbox
- CSS Grid
- CSS calc()

These features are supported in all modern browsers (Chrome, Firefox, Safari, Edge). IE11 is not supported.

---

## Accessibility Considerations

- Sufficient color contrast between text and backgrounds
- Focus states defined for interactive elements
- Semantic HTML structure with proper heading hierarchy
- ARIA labels where appropriate (navigation, buttons)
- Responsive text sizing with clamp() for better readability
- Skip links for keyboard navigation (`.skip-link.screen-reader-text`)

---

## File Structure Reference

When building pages in this design system, structure your HTML as follows:

```
<html>
  <head>
    <!-- CSS variables and global styles -->
  </head>
  <body>
    <div class="wp-site-blocks">
      <!-- Header template part -->
      <header class="wp-block-template-part">
        <!-- Site title, navigation -->
      </header>

      <!-- Main content area -->
      <main>
        <!-- Post/page content -->
      </main>

      <!-- Footer template part -->
      <footer class="wp-block-template-part">
        <!-- Footer content -->
      </footer>
    </div>
  </body>
</html>
```

---

This style guide provides the complete design system extracted from examples/e1.html and examples/e2.html. Use this as your authoritative reference for building new pages that match the established visual language.
