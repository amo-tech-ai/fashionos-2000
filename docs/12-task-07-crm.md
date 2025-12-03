# 🪄 Task 07: Sponsor CRM System

**Phase:** 2 (System Build)
**Dependencies:** Task 04
**Output:** CRM Modules

---

## 1. Context
Kanban board for tracking sponsorship deals.

## 2. Execution Prompt
Copy and paste this into your AI assistant:

```text
You are a Product Engineer.
Task: Build the Sponsor CRM Module.

=========================================
1. TYPES & MOCK DATA
=========================================
Define `Sponsor` interface and mock data.

=========================================
2. VIEW: `SponsorPipeline.tsx`
=========================================
- Implement a Kanban Board (Horizontal scrolling columns).
- Columns: Lead, Contacted, Proposal, Signed.
- Cards: Draggable (simulated).

=========================================
3. VIEW: `SponsorProfile.tsx`
=========================================
- Detail view for a single sponsor.
- Tabs: Overview, Deliverables.

Integrate these into `/dashboard/sponsors`.
```

## 3. Verification Checklist
- [ ] Pipeline view scrolls horizontally.
- [ ] Sponsor cards display correct status colors.
- [ ] Detail view links from the card.