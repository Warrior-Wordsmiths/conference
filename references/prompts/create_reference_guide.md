<objective>
Create a comprehensive reference style guide document based on the example webpages at examples/e1.html and examples/e2.html. This style guide will serve as the complete context for any agent tasked with creating websites in this established design system, ensuring consistency and adherence to the existing visual language.
</objective>

<context>
You are analyzing two WordPress pages (e1.html and e2.html) built with the Creatio theme. These files demonstrate a modern, modular design system that uses:
- WordPress block-based architecture
- CSS custom properties (variables) for theming
- Fluid responsive typography using clamp()
- Flexbox and Grid layouts
- Inter (sans-serif) and Literata (serif) font families

The style guide you create will be used by future agents to build new pages or components that match this established design aesthetic perfectly.
</context>

<requirements>
Your style guide must document the following with specific code examples:

1. **Complete Color Palette**
   - Extract ALL color values (hex codes, RGB, CSS variables)
   - Categorize: primary brand colors, neutrals, accents, utility colors
   - Document usage context (e.g., "used for primary buttons", "link hover states")
   - Include CSS variable names where applicable

2. **Typography System**
   - Font families with all weights and styles available
   - Font size scale with responsive clamp() values
   - Heading styles (h1-h6) with exact CSS
   - Special typography patterns (site title, post date, navigation, etc.)
   - Line heights, letter spacing, text transforms

3. **Spacing System**
   - All padding patterns used throughout
   - All margin patterns used throughout
   - CSS spacing variables (--wp--preset--spacing--)
   - Block gap defaults
   - Global padding standards

4. **Border Styles**
   - Border radius values
   - Border widths and styles
   - Border colors
   - Outline patterns

5. **Component Patterns**
   - Extract complete HTML + CSS for each reusable component:
     * Buttons (primary, secondary, hover states)
     * Navigation elements
     * Cards/Group containers
     * Headings
     * Post metadata (date, author)
     * Spacers
     * Lists
     * Images
     * Comments sections
   - Include both the HTML structure AND the CSS that styles it
   - Show variants where applicable

6. **Layout Patterns**
   - Grid systems
   - Flexbox usage patterns
   - Container width standards (content-size, wide-size)
   - Alignment classes
   - Layout types (flow, flex, grid, constrained)
   - Global padding and responsive behavior
   - Gap usage examples

7. **Sample Code Snippets**
   - Provide actual HTML/CSS snippets from the source files
   - Show real-world usage of the design system
   - Include both simple and complex examples
</requirements>

<implementation>
1. **Read both example files**:
   - @examples/e1.html
   - @examples/e2.html

   Since these files are very large (1500+ lines each), use strategic reading:
   - Read the first 200 lines to understand structure and initial styles
   - Use Grep to search for specific patterns (colors, fonts, spacing)
   - Extract style tags and inline styles
   - Look for CSS custom properties (variables)

2. **Organize your findings** into clear sections matching the requirements above

3. **Extract code snippets** showing actual usage:
   - Include the full HTML element structure
   - Include the complete CSS that styles it
   - Show both inline styles and class-based styles

4. **Document patterns, not just values**:
   - Don't just list "padding: 20px" - explain the pattern "Title sections use 20px vertical padding"
   - Show how responsive values work with clamp()
   - Explain the relationship between CSS variables and actual values

5. **Create a complete reference** that answers these questions:
   - What colors exist and where are they used?
   - What fonts are available and how are they sized?
   - How should spacing be applied?
   - What do standard components look like in code?
   - How is layout structured and constrained?

Why this matters: Future agents need to be able to copy-paste patterns and values directly from this guide to create new pages that look identical to the examples. The guide must be comprehensive enough that an agent can build a complete, visually consistent page without needing to reference the original HTML files.
</implementation>

<output>
Create a single comprehensive markdown file that will serve as the authoritative style guide reference.

Save to: `./STYLE-GUIDE-REFERENCE.md`

The document should be structured as follows:

```markdown
# Website Style Guide Reference
*Based on examples/e1.html and examples/e2.html*

## Overview
[Brief description of the design system]

## 1. Color Palette

### Primary Brand Colors
[List with hex codes, CSS variables, and usage context]

### Neutral Colors
[List with values and usage]

### Accent Colors
[Full palette with examples]

### CSS Color Variables
[Complete list of --wp--preset--color-- variables]

## 2. Typography System

### Font Families
[List all available fonts with weights and styles]

### Font Size Scale
[Document all preset font sizes with responsive clamp values]

### Heading Styles
[Complete CSS for h1-h6 with code snippets]

### Special Typography
[Site title, post date, navigation, body text patterns]

## 3. Spacing System

### Spacing Scale
[All --wp--preset--spacing-- values]

### Padding Patterns
[Common padding patterns with examples]

### Margin Patterns
[Common margin patterns with examples]

### Block Gap
[Default spacing between elements]

## 4. Borders

### Border Radius
[All border-radius values used]

### Border Styles
[Border width, style, color patterns]

## 5. Component Library

### Buttons
[Complete HTML + CSS for button components with variants]

### Navigation
[Navigation component structure and styling]

### Cards/Groups
[Container components with examples]

### Headings
[Heading component patterns]

### Post Components
[Date, author, title components]

### Lists
[List styling]

### Images
[Image component styling]

[...additional components...]

## 6. Layout System

### Layout Types
[Flow, Flex, Grid, Constrained layouts explained]

### Container Widths
[content-size and wide-size standards]

### Alignment
[Alignment classes and patterns]

### Global Padding
[Root padding variables and usage]

### Responsive Behavior
[How clamp() and viewport units work]

## 7. Usage Examples

### Building a Standard Page Header
[Complete example with code]

### Creating a Content Section
[Complete example with code]

### Styling a Button
[Complete example with code]

[...additional examples...]

## Quick Reference

### Most Common Values
- Primary color: [value]
- Body font: [value]
- Content width: [value]
- Standard padding: [value]
- Button radius: [value]

### CSS Variables Cheatsheet
[Quick lookup table of most-used variables]
```
</output>

<success_criteria>
The style guide is complete when:

✓ All color values from both files are documented with context
✓ Complete typography system is mapped including all font sizes
✓ All spacing patterns are captured with CSS variable references
✓ Component library includes HTML + CSS for all major components
✓ Layout system is fully explained with examples
✓ Code snippets are real examples extracted from the source files
✓ A future agent could build a visually identical page using only this guide
✓ The guide is organized, searchable, and easy to reference
✓ Both examples (e1.html and e2.html) are thoroughly represented
</success_criteria>

<verification>
Before declaring this complete, verify:

1. Open the created STYLE-GUIDE-REFERENCE.md and confirm it contains:
   - At least 50+ distinct color values
   - Complete font family listings (Inter, Literata, etc.)
   - All spacing presets (--wp--preset--spacing--)
   - At least 10 component patterns with HTML + CSS
   - Complete layout system documentation

2. Cross-reference against the source files:
   - Pick 3 random components from e1.html and verify they're documented
   - Pick 3 random components from e2.html and verify they're documented
   - Ensure CSS variable names match exactly

3. Test usability:
   - Could you build a button using only the guide?
   - Could you create a page header using only the guide?
   - Are all necessary values present and clearly explained?

If any verification fails, continue refining the style guide until all criteria are met.
</verification>