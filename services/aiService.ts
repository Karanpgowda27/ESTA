
import { GoogleGenAI, Chat, GenerateContentResponse, Modality } from "@google/genai";

const KNOWLEDGE_BASE_DOTS = `
[ACADEMY KNOWLEDGE - E.S.T.A]
- ENTITY: Exelity Skill Training Academy (ESTA).
- PARENT: Doberman Security Solutions Pvt Ltd (DSSPL).
- TAGLINE: "Come and Excel".
- HUB 1 (HQ): Bommasandra, Bengaluru. Focus: IT giants (TCS, Infosys).
- HUB 2: Mysuru/Mangaluru. Focus: Luxury residential (Sobha, Brigade).
- HUB 3: Hosur/Sira. Focus: Industrial & Logistics (Toyota, Aditya Birla).
- UNIFORM: "Doberman Tactical Kit" including lanyards and high-grip footwear.
- WELFARE: GPA Insurance and E-Nomination are provided.
`;

let activeChat: Chat | null = null;

export const startNewChat = (language: string = 'en') => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  activeChat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `You are the "Exelity Academy Advisor." 
      Personality: Professional, polite, and service-oriented.
      
      CORE PROTOCOLS:
      1. MULTI-LANGUAGE: You are fluent in English, Kannada, Tamil, and Telugu. Always respond in the language the user speaks to you in.
      2. COURTEOUS BREVITY: 1-2 helpful sentences maximum.
      3. CONNECT DOTS: Link location/interest to ESTA hubs (e.g., Hosur -> Aditya Birla).
      4. VOICE ADVISORY: If used via voice, be extremely concise and clear.
      
      CONTEXT: ${KNOWLEDGE_BASE_DOTS}`,
      temperature: 0.7,
    },
  });
  return activeChat;
};

export const getStreamingSecurityAdvice = async (userMessage: string) => {
  if (!activeChat) startNewChat();
  return await activeChat!.sendMessageStream({ message: userMessage });
};
