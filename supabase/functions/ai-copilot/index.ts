import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { GoogleGenAI } from "https://esm.sh/@google/genai@0.1.0";

// Fix: Declare Deno global to prevent type errors
declare const Deno: any;

const apiKey = Deno.env.get("GEMINI_API_KEY") || "";
const ai = new GoogleGenAI({ apiKey });

serve(async (req) => {
  const { task, prompt } = await req.json();

  if (task === 'polish_brief') {
    // Fix: Use ai.models.generateContent per new SDK guidelines
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Rewrite this creative brief to be professional, clear, and inspiring for a fashion production team:\n\n${prompt}`,
    });
    
    // Fix: Access text property directly
    const text = response.text;

    return new Response(
      JSON.stringify({ result: text }),
      { headers: { "Content-Type": "application/json" } },
    );
  }

  return new Response(
    JSON.stringify({ error: "Unknown task" }),
    { status: 400, headers: { "Content-Type": "application/json" } },
  );
});