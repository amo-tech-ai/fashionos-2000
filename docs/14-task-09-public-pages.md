# 🪄 Task 09: Brand, SEO & Core Pages

**Phase:** 3 (Public & Marketing)
**Dependencies:** Task 02
**Output:** Polished Marketing Pages

---

## 1. Context
The public site needs to look professional, be SEO-ready, and communicate the brand's luxury aesthetic.

## 2. Execution Prompt
Copy and paste this into your AI assistant:

```text
You are a Frontend Developer & SEO Specialist.
Task: Polish the public website pages.

=========================================
1. SEO HEAD
=========================================
Create `src/components/seo/SEOHead.tsx`:
- Inputs: title, description, image.
- Uses `react-helmet-async`.
- Defaults to brand constants if props are missing.

=========================================
2. PAGE CONTENT
=========================================
Update or Create:
- `HomePage.tsx`: Ensure high-impact Hero, Feature Grid, and Call to Action are present.
- `AboutPage.tsx`: Add Team grid and "Our Story" timeline.
- `ContactPage.tsx`: Add a functional contact form (UI only for now) and business details.

=========================================
3. ASSETS
=========================================
- Use `lucide-react` for all icons.
- Ensure all images use lazy loading (or the `Image` component if created).

Output updated page files.
```

## 3. Verification Checklist
- [ ] All pages have correct meta titles and descriptions.
- [ ] About page shows team grid.
- [ ] Contact page form inputs look styled.