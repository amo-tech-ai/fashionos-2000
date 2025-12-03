# 📝 Changelog

## [Unreleased] - 2024-05-20

### 🚀 Added - Public Website Core Pages
We have successfully deployed the high-fidelity editorial frontend for the public-facing website.

#### 1. Core Architecture
- **Routing:** Implemented `HashRouter` via `react-router-dom` v7 for environment compatibility.
- **Design System:** Established "Atelier" design tokens (Cormorant Garamond + Inter fonts, editorial color palette).
- **Navigation:** Responsive `Navbar` with mobile menu and transparent-to-white scroll transition.
- **Footer:** SEO-rich luxury footer with multi-column layout.

#### 2. Page: Home (`/`)
- **Hero:** Split-screen editorial layout with fade-in animations.
- **Components:** Latest Campaigns, About Studio, Signature Story, Testimonials, BTS Video section.
- **Integration:** Links to all service verticals.

#### 3. Page: Fashion Photography (`/services/photography`)
- **Visuals:** Updated to high-fashion editorial imagery (runway, model).
- **Features:** Packages pricing grid, Service overview, FAQ section.

#### 4. Page: Product Photography (`/services/product`)
- **Visuals:** Pivoted imagery to Luxury Jewelry & Accessories (Watches, Rings, Perfume).
- **Features:** "Exceptional Imagery" grid, Mobile-responsive benefits section.

#### 5. Page: Clothing Photography (`/services/clothing`)
- **Visuals:** Focused on Ghost Mannequin, Flats, and Apparel Still Life.
- **Features:** Process explanation (Invisible Mannequin), detailed service breakdown.

#### 6. Page: Retouching Services (`/services/retouching`)
- **Interactive:** "Before & After" image hover reveal component.
- **Visuals:** High-end beauty and skin retouching focus.
- **Features:** Service grid (Compositing, Color Grading).

#### 7. Page: Studio Hire (`/studio-hire`)
- **Features:** Pricing strip, Facilities breakdown, Equipment list.
- **Visuals:** Studio interior shots, floorplan placeholders.

### 🔧 Fixed / Improved
- **Imagery:** Swapped generic placeholders for domain-specific Unsplash imagery across all service pages.
- **Typography:** Standardized `font-serif` usage for all H1-H3 headings.
- **Spacing:** Enforced 120px+ vertical rhythm for editorial feel.

### ⚠️ Known Issues / Pending
- **Forms:** Contact and Booking forms are UI-only (no backend connection).
- **Directory:** `/directory` route not yet implemented (currently a section on Home).
- **Marketplace:** `/marketplace` route not yet implemented.
- **Dashboard:** Private dashboard routes (`/dashboard/*`) are defined in docs but not implemented in code.
