# 🪄 Task 05: Shoot Booking Engine

**Phase:** 2 (System Build)
**Dependencies:** Task 02, Task 04
**Output:** Booking Wizard Components

---

## 1. Context
A 13-step "Airbnb-style" booking flow for photoshoots at `/start-project`.

## 2. Execution Prompt
Copy and paste this into your AI assistant:

```text
You are a UX Engineer.
Task: Build the "Shoot Booking Wizard".

=========================================
1. STATE MANAGEMENT
=========================================
Create `BookingContext.tsx`:
- Store: serviceType, category, shotCount, date, creativeBrief.
- Logic: Calculate `estimatedPrice` in real-time.

=========================================
2. WIZARD LAYOUT
=========================================
Create `src/layouts/WizardLayout.tsx`:
- Left col: Form Step.
- Right col (Desktop): Sticky "Receipt" summary.
- Bottom (Mobile): Sticky "Next" button.

=========================================
3. STEPS IMPLEMENTATION
=========================================
Build components in `src/features/booking/`:
- `StepCategory.tsx`: Grid of cards.
- `StepQuantity.tsx`: Slider input.
- `StepBrief.tsx`: Textarea with AI polish button.
- `StepReview.tsx`: Summary.

Output `BookingContext.tsx` and `WizardLayout.tsx`.
```

## 3. Verification Checklist
- [ ] Context provider wraps the booking route.
- [ ] State updates persist between steps.
- [ ] Price calculation updates in real-time.