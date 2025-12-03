# 🪄 Task 11: Performance Optimization

**Phase:** 3 (Public & Marketing)
**Dependencies:** All previous tasks
**Output:** Optimized Asset Loading & Code Splitting

---

## 1. Context
Ensure the application loads fast and handles assets efficiently, crucial for an image-heavy fashion site.

## 2. Execution Prompt
Copy and paste this into your AI assistant:

```text
You are a Performance Engineer.
Task: Optimize FashionOS for production.

=========================================
1. CODE SPLITTING
=========================================
Update `src/App.tsx`:
- Wrap all route components with `React.lazy` and `Suspense`.
- Ensure `LoadingScreen.tsx` is used as the fallback.

=========================================
2. IMAGE OPTIMIZATION
=========================================
Create `src/components/ui/Image.tsx`:
- Wrapper that handles blur-up loading effect.
- Fallback for error states.
- Props: src, alt, className.

=========================================
3. ERROR BOUNDARIES
=========================================
Create `src/components/ui/ErrorBoundary.tsx`:
- Catch rendering errors and show a friendly "Something went wrong" UI.

Output the App router updates and utility components.
```

## 3. Verification Checklist
- [ ] Dashboard routes lazy load (check network tab).
- [ ] Images have a smooth fade-in effect.
- [ ] App recovers gracefully if a component crashes.