import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function callClaude({ model = 'claude-haiku-4-5-20251001', systemPrompt, userMessage, cacheSystem = true }) {
  const systemContent = cacheSystem
    ? [{ type: 'text', text: systemPrompt, cache_control: { type: 'ephemeral' } }]
    : systemPrompt;

  const response = await client.messages.create({
    model,
    max_tokens: 4096,
    system: systemContent,
    messages: [{ role: 'user', content: userMessage }],
  });

  const text = response.content[0].text.trim();

  // Strip markdown code fences if present
  const jsonMatch = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
  return JSON.parse(jsonMatch ? jsonMatch[1] : text);
}
