import { GoogleGenAI, Type } from "@google/genai";
// FIX: Changed `import type` to `import` to allow using enum values from `../types`.
import { type Quest, Language, Framework } from '../types';

// FIX: Removed unnecessary `as string` cast for the API key to align with guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateQuests = async (language: Language, framework: Framework, goal: string): Promise<Quest[]> => {
  const frameworkText = framework === Framework.None ? '' : ` using ${framework}`;
  
  // FIX: Refactored prompt into a system instruction for persona/task definition and a user prompt for specific context.
  const systemInstruction = `You are an expert programming mentor called "VibeAI". 
Generate 5 creative and engaging coding quests that are progressively more difficult for a user.
Each quest must have a clear title, a detailed description of the task, and a list of key concepts they will learn.
The tone should be encouraging, cool, and a bit futuristic, like a "cyber-mentor".
Ensure the output is a valid JSON array matching the provided schema.`;

  const userPrompt = `A user wants to learn ${language}${frameworkText}. Their goal is: "${goal}".`;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: userPrompt,
    config: {
      systemInstruction: systemInstruction,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            title: {
              type: Type.STRING,
              description: "A cool, catchy title for the coding quest."
            },
            description: {
              type: Type.STRING,
              description: "A detailed description of the task, what to build, and the requirements."
            },
            keyConcepts: {
              type: Type.ARRAY,
              items: {
                type: Type.STRING
              },
              description: "A list of key programming concepts the user will learn or apply in this quest."
            }
          },
          // FIX: Removed `required` property as it's not present in the Gemini API documentation examples for responseSchema.
          // The model is instructed to populate these fields via the system prompt.
        },
      },
    }
  });

  try {
    const jsonText = response.text.trim();
    const quests: Quest[] = JSON.parse(jsonText);
    return quests;
  } catch (error) {
    console.error("Failed to parse AI response:", response.text);
    throw new Error("The AI returned an unexpected response format.");
  }
};
