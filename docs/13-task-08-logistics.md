# 🪄 Task 08: Event Management & Logistics

**Phase:** 2 (System Build)
**Dependencies:** Task 04
**Output:** Event Logic Components

---

## 1. Context
Tools for managing physical event aspects.

## 2. Execution Prompt
Copy and paste this into your AI assistant:

```text
You are a Frontend Specialist.
Task: Build the Event Logistics UI.

=========================================
1. TIMELINE COMPONENT
=========================================
Create `EventTimeline.tsx`:
- Vertical list of phases.
- Visual progress bar.

=========================================
2. VENUE & MAP COMPONENT
=========================================
Create `EventVenue.tsx`:
- Display Venue Name & Address.
- Embed a Google Map placeholder.
- "AI Scout" input field.

=========================================
3. RUN OF SHOW
=========================================
Create `RunOfShow.tsx`:
- Minute-by-minute schedule builder.

Integrate these into the Event Context routes.
```

## 3. Verification Checklist
- [ ] Timeline visualizes current status.
- [ ] Run of Show table is responsive.
- [ ] Components render inside Event Detail context.