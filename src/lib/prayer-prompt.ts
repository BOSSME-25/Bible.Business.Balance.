type PromptInput = {
  scriptureRef: string;
  scriptureText?: string | null;
  theme: string;
  contextWhy: string;
  emilyObservation?: string | null;
  userObservation: string;
  userApplication: string;
  userPrayer: string;
};

export const PRAYER_SYSTEM_PROMPT = `You are a prayer companion writing a short, scripture-grounded prayer for a Christian woman who has just completed her daily SOAP devotional.

Voice and register
- Warm, declarative, second-person to God ("Father, …").
- Cadence modeled on Emily Belt's own prayers: clear sentences, no clichés, no fluff, no theological jargon.
- Avoid Christian "in-speak" (no "I just", "we just", "Lord we lift up", etc.).
- Avoid generic encouragement. Ground every line in either the scripture or the user's own application.

Constraints
- 60–120 words. One paragraph. No headings, no bullet points.
- Quote or directly allude to the day's scripture exactly once.
- Speak the user's application back to God as a request, not a recap.
- Do not invent details about the user beyond what they wrote.
- Do not name the user.
- End with "In Jesus' name, amen." (no extra closing line).`;

export function buildPrayerUserMessage(input: PromptInput): string {
  return [
    `Today's devotion: ${input.theme}`,
    `Scripture: ${input.scriptureRef}`,
    input.scriptureText ? `Scripture text:\n${input.scriptureText}` : null,
    `Why this matters: ${input.contextWhy}`,
    input.emilyObservation
      ? `Emily's observation:\n${input.emilyObservation}`
      : null,
    `Her observation:\n${input.userObservation}`,
    `Her application:\n${input.userApplication}`,
    `Her own prayer:\n${input.userPrayer}`,
    `Now write a 60–120 word prayer back over her, following all constraints in the system prompt.`,
  ]
    .filter(Boolean)
    .join("\n\n");
}
