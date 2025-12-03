# 📝 Changelog

## [Current] - Phase 4 Initiation

### 🚀 Phase 3 Complete: Public Site & Performance (Verified)
- **Talent Directory:** Implemented `/directory` with role-based filtering (Photographer, Model, Stylist) and search UI.
- **Service Packages:** Implemented `/services` with pricing tiers (Lookbook, Campaign, Enterprise).
- **Performance Architecture:**
  - Added `React.lazy()` and `Suspense` to `App.tsx` for route code-splitting.
  - Created `LoadingScreen` component for transition states.
  - Implemented `Image` component with blur-up loading effect.
  - Added `ErrorBoundary` for graceful failure handling.
- **SEO:** Integrated `react-helmet-async` via `SEOHead` component across public pages.

### 🚀 Phase 2 Complete: System & Business Logic (Verified)
- **Dashboard:**
  - Implemented Context-Aware Sidebar: Switches between Global view and Event-specific view based on URL.
  - Created `TopBar` with search and user profile.
  - Added `OverviewPage` with mock stats.
- **Booking Engine:**
  - Built 4-step Wizard (`Category`, `Quantity`, `Brief`, `Review`).
  - Implemented `BookingContext` for state management and real-time pricing calculation.
- **AI Infrastructure:**
  - Created `src/lib/ai-service.ts` to interface with Supabase Edge Functions.
  - Created `supabase/functions/ai-copilot` for secure Gemini API calls.
- **CRM:**
  - Built `SponsorPipeline` Kanban board for managing brand deals.
- **Event Logistics:**
  - Created `EventTimeline` for production schedules.
  - Created `RunOfShow` table.
  - Created `EventVenue` component with map placeholder.

## [Previous] - 2024-05-20

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

#### 3. Service Verticals
- **Fashion Photography:** High-fashion editorial imagery, packages pricing grid.
- **Product Photography:** Luxury Jewelry & Accessories focus.
- **Clothing Photography:** Ghost Mannequin & Flats focus.
- **Retouching:** Before & After interactive component.
- **Studio Hire:** Pricing strip and Facilities breakdown.
