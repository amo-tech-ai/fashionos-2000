# 🪄 Task 14: System Health Dashboard

**Phase:** 4 (Infrastructure, QA & Launch)
**Dependencies:** Task 04
**Output:** Admin Diagnostics View

---

## 1. Context
Create a visual "Go/No-Go" dashboard to verify system integrity before launch.

## 2. Execution Prompt
Copy and paste this into your AI assistant:

```text
You are a Backend Engineer.
Task: Build the System Health Dashboard.

=========================================
1. UI COMPONENT
=========================================
Create `src/pages/dashboard/admin/SystemHealth.tsx`:
- Layout: Grid of status cards.
- Indicators:
  - Database Connection (Latency check).
  - Storage Bucket Access.
  - AI Edge Function Availability.
  - Third-party Integrations (Stripe/Resend - Mock).

=========================================
2. DIAGNOSTICS LOGIC
=========================================
- Create a hook `useSystemDiagnostics` that:
  - Pings a Supabase endpoint (mock).
  - Checks if `process.env.GEMINI_API_KEY` is set.
  - returns `{ status: 'healthy' | 'degraded', latency: number }`.

Output the Dashboard Page and the Hook.
```

## 3. Verification Checklist
- [ ] Dashboard loads under `/dashboard/settings/health` (or similar).
- [ ] Indicators show Green/Red based on status.
- [ ] Latency numbers update on refresh.