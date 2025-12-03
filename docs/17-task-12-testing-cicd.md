# 🪄 Task 12: Testing & CI/CD Infrastructure

**Phase:** 4 (Infrastructure, QA & Launch)
**Dependencies:** Completed App Features
**Output:** Test Configs & Workflow Files

---

## 1. Context
Setup the testing harness configurations to prevent regression on critical paths when run in a proper Node environment.

## 2. Execution Prompt
Copy and paste this into your AI assistant:

```text
You are a DevOps Engineer.
Task: Configure Testing and CI/CD for FashionOS.

=========================================
1. UNIT TESTING (Vitest)
=========================================
Generate `vitest.config.ts` configured for React/DOM.
Create a sample test file `src/utils/pricing.test.ts` (mock) to verify the test runner works.

=========================================
2. E2E TESTING (Playwright)
=========================================
Generate `playwright.config.ts`.
Create a critical path test spec `e2e/booking-flow.spec.ts` that walks through the booking wizard steps (Category -> Quantity -> Brief -> Review).

=========================================
3. CI/CD WORKFLOWS
=========================================
Create `.github/workflows/pr-check.yml`:
- Run `npm run lint`.
- Run `npm run typecheck`.
- Run `npm run test`.

Create `.github/workflows/deploy.yml`:
- Triggers on push to `main`.
- Deploys Supabase Edge Functions (mock command).
- Deploys DB Migrations (mock command).

Output the configuration files and workflow YMLs.
```

## 3. Verification Checklist
- [ ] `vitest.config.ts` handles React imports.
- [ ] `playwright.config.ts` sets up localhost.
- [ ] Workflow files are valid YAML.