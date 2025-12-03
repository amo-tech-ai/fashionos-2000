# 🪄 Task 10: Directory & Services

**Phase:** 3 (Public & Marketing)
**Dependencies:** Task 02
**Output:** Directory and Services Pages

---

## 1. Context
A searchable directory of fashion professionals and service templates to allow clients to find talent and understand pricing.

## 2. Execution Prompt
Copy and paste this into your AI assistant:

```text
You are a Full Stack Engineer.
Task: Build the Public Directory and Service Templates.

=========================================
1. DIRECTORY GRID
=========================================
Create `src/pages/site/DirectoryPage.tsx`:
- FilterSidebar: Role (Model, Photographer, Stylist), Location.
- Grid: `TalentCard` components (Image, Name, Role, Rate).
- SearchBar: Real-time filtering (client-side mock for now).

=========================================
2. SERVICE TEMPLATES
=========================================
Create `src/pages/site/ServicesPage.tsx`:
- Pricing Tables for "Lookbook Shoot", "Runway Show", "Brand Campaign".
- "Book Now" buttons linking to `/start-project`.

Output the Directory and Services pages.
```

## 3. Verification Checklist
- [ ] Directory page filters work (mock logic).
- [ ] Service page lists at least 3 distinct packages.
- [ ] Book Now buttons route correctly to the wizard.