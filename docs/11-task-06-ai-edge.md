# 🪄 Task 06: AI Infrastructure (Edge Functions)

**Phase:** 2 (System Build)
**Dependencies:** Task 03
**Output:** Edge Functions & Frontend SDK

---

## 1. Context
Secure backend proxy for Gemini 3 API calls using Supabase Edge Functions.

## 2. Execution Prompt
Copy and paste this into your AI assistant:

```text
You are a Backend Security Engineer.
Task: Create Supabase Edge Functions to handle AI requests securely.

=========================================
1. FUNCTION: `ai-copilot`
=========================================
Create `supabase/functions/ai-copilot/index.ts`:
- Input: `{ prompt, context, task }`
- Logic:
  - Initialize GoogleGenAI with `process.env.GEMINI_API_KEY`.
  - Tasks: 'polish_brief', 'generate_schedule'.
  - Model: `gemini-2.5-flash`.
- Output: JSON response.

=========================================
2. FRONTEND SDK
=========================================
Create `src/lib/ai-service.ts`:
- `polishBrief(text)`: Calls the edge function.
- `generateEventDraft(text)`: Calls edge function.

Output the TypeScript code for the Edge Function and the Frontend Service.
```

## 3. Verification Checklist
- [ ] Edge function handles CORS correctly.
- [ ] API Key is not exposed in frontend code.
- [ ] Frontend SDK handles network errors gracefully.