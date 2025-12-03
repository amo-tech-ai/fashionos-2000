# 🪄 Task 13: Security Audit & Project Documentation

**Phase:** 4 (Infrastructure, QA & Launch)
**Dependencies:** Task 03, Task 06
**Output:** Security Verification Scripts & Manuals

---

## 1. Context
Audit data access rules and mock security logic for the frontend, and provide developer documentation.

## 2. Execution Prompt
Copy and paste this into your AI assistant:

```text
You are a Security Engineer.
Task: Audit and secure the application.

=========================================
1. SECURITY VERIFICATION (RLS)
=========================================
Generate a SQL script `supabase/tests/security.sql` using pgTAP syntax to conceptually verify:
- Users cannot access other org's projects.
- Anon users cannot access private events.

=========================================
2. EDGE FUNCTION SECURITY
=========================================
Update `src/lib/ai-service.ts`:
- Add logic to verify that an Auth Token exists before making the fetch call.
- Log a specific security warning if the token is missing.

=========================================
3. DOCUMENTATION
=========================================
Create `README.md`:
- Project Overview.
- Architecture (ESM/CDN/Vite).
- Setup Instructions.
- Environment Variable Reference.

Create `CONTRIBUTING.md`:
- Code style guidelines.
- Branching strategy.

Output the SQL script, updated service file, and documentation markdown.
```

## 3. Verification Checklist
- [ ] `security.sql` covers basic multi-tenant scenarios.
- [ ] `ai-service.ts` fails gracefully without auth.
- [ ] `README.md` is comprehensive.