<objective>
Improve the UI/UX of this conference website to enhance navigation, add strategic call-to-action elements, and ensure excellent mobile responsiveness. The goal is to help visitors easily find information and take key actions (attending the conference, submitting papers, learning general info) while maintaining all existing content.

This is a conference page, so users have clear intent: join/attend the conference, submit papers, or learn general information. The improvements should guide them efficiently to their goals.
</objective>

<context>
This is a conference website that needs UI/UX improvements without changing the core information.

Review the existing structure:
@**/*.html
@**/*.css
@assets/*

The website should:
- Use photos from @assets directory
- Look good on both phones and computers (responsive design)
- Keep all existing information intact
- Add subtle enhancements to improve user flow
</context>

<requirements>
1. **Call-to-Action Elements**:
   - Add a prominent yellow-ish header/banner at the top letting visitors know they can submit papers
   - Include clear CTAs for primary actions: "Submit Paper", "Register/Attend", "Learn More"
   - Use attention-grabbing but professional styling

2. **Navigation Improvements**:
   - Ensure users can quickly identify what section they're in
   - Add or improve navigation to key sections (about, submissions, registration, schedule, etc.)
   - Consider sticky/fixed navigation for easy access

3. **Content Enhancement**:
   - Add small, strategic sentences or attention-grabbers in specific sections to guide users
   - These should be concise and action-oriented
   - Steer users toward the right part of the page for their needs

4. **Responsive Design**:
   - Ensure excellent mobile experience (phones)
   - Maintain visual quality on desktop/tablets
   - Test that images from @assets scale properly
   - Ensure text is readable on all screen sizes

5. **Visual Improvements**:
   - Improve spacing, padding, and visual hierarchy
   - Enhance color scheme while keeping professional conference aesthetic
   - Use images from @assets effectively
   - Improve typography and readability
</requirements>

<implementation>
**What to change:**
- CSS styling (spacing, colors, responsive breakpoints, visual hierarchy)
- HTML structure where needed for better semantics and layout
- Add new UI elements (banners, CTAs, section dividers)
- Improve responsive design with media queries

**What NOT to change:**
- Core conference information (dates, location, topics, speakers, etc.)
- Existing images in @assets (but you can use them more effectively)
- The fundamental purpose and content of each section

**Why these constraints matter:**
- The information is already good and accurate - we're enhancing presentation, not rewriting content
- Images in @assets are conference-specific - they should be preserved and showcased
- Moderate updates mean improving structure, not complete redesign

**Approach:**
1. First, read existing HTML/CSS files to understand current structure
2. Identify key sections that need attention-grabbers or improved navigation
3. Design the yellow-ish submission banner/header
4. Add strategic micro-copy and CTAs throughout
5. Implement responsive improvements with mobile-first approach
6. Test that all images from @assets are properly utilized and responsive
</implementation>

<output>
Update existing files as needed:
- Modify HTML files to add CTAs, banners, and improved structure
- Update CSS files with responsive improvements, better spacing, and visual enhancements
- Create new CSS if needed for modularity: `./styles/improvements.css`

Do NOT create new image files - use existing assets from @assets
</output>

<verification>
Before declaring complete, verify:
1. Yellow-ish paper submission banner/header is prominently displayed
2. Clear CTAs exist for main actions (submit, attend, learn more)
3. Added strategic text/attention-grabbers in key sections
4. Website is responsive on mobile (use browser dev tools mental model)
5. All images from @assets are properly integrated and responsive
6. Navigation is improved and easy to use
7. All original information is preserved
8. Professional conference aesthetic is maintained

Test these scenarios:
- A researcher looking to submit a paper finds the CTA quickly
- Someone wanting to attend can easily find registration info
- Mobile user can navigate and read comfortably
- Images scale properly on different screen sizes
</verification>

<success_criteria>
✓ Prominent yellow-ish submission banner added at top
✓ Clear CTAs for key actions (submit, attend, learn)
✓ Strategic attention-grabbers added to guide users
✓ Excellent mobile responsiveness with proper breakpoints
✓ Images from @assets used effectively and scale properly
✓ Improved visual hierarchy and spacing
✓ All original content preserved
✓ Professional, polished appearance suitable for an academic conference
</success_criteria>
