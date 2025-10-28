
import { GoogleGenAI } from "@google/genai";
import { StateLaw } from '../types';

if (!process.env.API_KEY) {
  console.warn("API_KEY environment variable not set. AI features will be disabled.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

const formatLawForPrompt = (law: StateLaw): string => {
  let structuredData = '';
  for (const [key, value] of Object.entries(law)) {
    if (key !== 'markdownContent' && key !== 'tags' && value !== null && value !== undefined) {
      if (Array.isArray(value)) {
        if (value.length > 0) {
          structuredData += `${key}:\n- ${value.join('\n- ')}\n`;
        }
      } else if (typeof value === 'object') {
         structuredData += `${key}: ${JSON.stringify(value, null, 2)}\n`;
      } else {
        structuredData += `${key}: ${value}\n`;
      }
    }
  }

  return `
LAW DATA START
================
STRUCTURED DATA:
${structuredData}
================
NARRATIVE SUMMARY:
${law.markdownContent}
================
LAW DATA END
  `;
};

const formatLawForGlobalPrompt = (law: StateLaw): string => {
  // A more concise summary for the global prompt to save tokens, focusing on key comparable fields and the full PII definition.
  const piiSection = law.markdownContent.match(/### Personal Information\n([\s\S]*?)\n##/)?.[1] || 'Not specified.';
  return `
--- STATE: ${law.state} (${law.stateCode}) ---
Individual Notification Timeline: ${law.individualNotificationTimelineDays > 0 ? `${law.individualNotificationTimelineDays} days` : 'ASAP'}
AG Notification Required: ${law.agNotificationIsRequired}
AG Notification Threshold: ${law.agNotificationThreshold ?? 'N/A'}
Private Right of Action: ${law.enforcementPrivateRightOfAction}
Risk of Harm Analysis Allowed: ${law.riskOfHarmAnalysisCanEliminateNotification}
Exemption for HIPAA: ${law.exemptionHipaa}
Breach Definition: ${law.breachDefinitionText}
Definition of Personal Information:
${piiSection}
  `;
};


export const getLawSummaryStream = async (law: StateLaw, question: string) => {
  if (!process.env.API_KEY) {
    throw new Error("Gemini API key is not configured.");
  }
  
  const lawText = formatLawForPrompt(law);

  const prompt = `
You are a legal technology assistant specializing in U.S. data breach laws. Your task is to answer questions based *only* on the provided legal summary for a specific state. Do not use any external knowledge. If the answer isn't in the provided text, state that the information is not available in the summary.

Here is the data for ${law.state}:
${lawText}

Based *only* on the information above, please answer the following question: "${question}"
  `;

  try {
    const stream = await ai.models.generateContentStream({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return stream;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to get response from AI assistant.");
  }
};


export const getGlobalLawSummaryStream = async (laws: StateLaw[], question: string) => {
  if (!process.env.API_KEY) {
    throw new Error("Gemini API key is not configured.");
  }

  const allLawsText = laws.map(formatLawForGlobalPrompt).join('\n\n');

  const prompt = `
You are a legal technology assistant specializing in U.S. data breach laws. Your task is to answer comparative questions by synthesizing information from the provided legal summaries for ALL available states.

- Base your answer *only* on the information provided below.
- Do not use an external knowledge.
- When listing states, always include the state name.
- If the question asks for a list, provide a clear, bulleted list.
- If the information to answer the question is not in the provided summaries, state that clearly.y

Here is the data for all available jurisdictions:
${allLawsText}

Based *only* on the information above, please answer the following question: "${question}"
  `;
  
  try {
    const stream = await ai.models.generateContentStream({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return stream;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to get response from AI assistant.");
  }
};
