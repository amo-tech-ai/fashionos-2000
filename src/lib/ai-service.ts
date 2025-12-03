
/**
 * AI Service for FashionOS
 * Handles communication with Supabase Edge Functions for GenAI tasks.
 */

const EDGE_FUNCTION_URL = process.env.REACT_APP_SUPABASE_URL 
  ? `${process.env.REACT_APP_SUPABASE_URL}/functions/v1/ai-copilot` 
  : 'http://localhost:54321/functions/v1/ai-copilot'; // Fallback for local dev

export const aiService = {
  
  /**
   * Polish a rough creative brief into a professional structure.
   */
  async polishBrief(rawText: string): Promise<string> {
    try {
      const response = await fetch(EDGE_FUNCTION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY || ''}`
        },
        body: JSON.stringify({
          task: 'polish_brief',
          prompt: rawText
        })
      });

      if (!response.ok) throw new Error('AI Service Error');
      const data = await response.json();
      return data.result;
    } catch (error) {
      console.error('AI Polish Failed:', error);
      return rawText; // Fallback to original
    }
  },

  /**
   * Generate an event Run of Show draft based on parameters.
   */
  async generateEventDraft(params: { type: string; duration: string; vibe: string }): Promise<any> {
    // Implementation would follow similar pattern
    return { mock: true, ...params };
  }
};
