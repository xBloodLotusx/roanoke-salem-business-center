
# Roanoke-Salem Business Center — Landing Page Plan

A clean, professional single-page marketing site for the commercial plaza at 4142 Melrose Ave NW, Roanoke, VA. Image placeholders throughout (no AI-generated imagery).

## Design Direction
- **Tone:** Established, trustworthy, community-rooted, practical
- **Palette:** Warm neutral base (off-white, soft stone) with a deep slate-blue primary and a subtle brick-red accent — evokes mid-century commercial heritage updated for today
- **Typography:** Strong serif for headlines (heritage feel) paired with a clean sans-serif for body (modern legibility)
- **Layout:** Generous whitespace, wide content sections, soft section dividers, subtle scroll-in fade animations
- **Image placeholders:** Neutral gray blocks with a small icon + descriptive label (e.g., "Plaza Exterior") so the user knows what each slot is for

## Page Sections (single-page scroll, anchor nav)

1. **Sticky Top Nav**
   - Property name (left), anchor links: About · Features · Why Us · Location · Gallery · Contact
   - "Leasing Inquiries" CTA button (right)

2. **Hero**
   - Full-width image placeholder (wide commercial plaza)
   - Headline: *"A Community Business Hub Serving Roanoke and Salem Since 1962."*
   - Subheadline on accessibility, visibility, and flexible multi-tenant space
   - Two CTAs: "Inquire About Leasing" · "View Property"
   - Small "Est. 1962" badge

3. **About**
   - Two-column: text left, image placeholder right (historic-to-modern)
   - Overview, address, heritage as Roanoke-Salem Plaza, current rebrand
   - Note on availability: suites from 400–6,000 sq ft

4. **Property Features**
   - 6-card grid with icons:
     - Flexible Suite Sizes
     - High-Traffic Visibility
     - General Commercial Zoning
     - Ample Parking
     - Easy Road Access
     - Longstanding Community Presence

5. **Why Businesses Choose Us**
   - Alternating row layout with image placeholders
   - 4 key value props (flexible sizes, affordability, ideal tenant mix, local management)

6. **Location & Map**
   - Address card with copy-friendly address
   - Embedded map placeholder (styled block representing Melrose Ave corridor)
   - Bullet list: nearby landmarks, traffic flow notes, accessibility

7. **Photo Gallery**
   - Responsive masonry/grid of 6–8 labeled placeholders: exterior, signage, suite interiors, parking, surrounding area

8. **Leasing Inquiry CTA Strip**
   - Bold band with "Suites Available — Inquire Today" + button

9. **Footer**
   - Property name, address, placeholder phone/email for leasing
   - Quick links, copyright, "Originally opened 1962" tagline

## Technical Notes
- All content in `src/pages/Index.tsx` with small section components in `src/components/sections/`
- Design tokens (colors, fonts) added to `index.css` and `tailwind.config.ts` — no hardcoded colors in components
- Smooth-scroll anchor navigation
- Fully responsive (mobile nav collapses to a sheet/drawer)
- Semantic HTML + proper heading hierarchy + meta tags (title/description) for SEO
