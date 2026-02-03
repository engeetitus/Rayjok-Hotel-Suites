
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getConciergeResponse = async (history: Message[]) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      })),
      config: {
        systemInstruction: "You are the Rayjok Hotel & Suites Smart Concierge. You are elegant, professional, and extremely helpful. You know about our room types (Standard, Deluxe, Executive, Presidential), our focus on 'Class, Taste, and Cool', our location in Victoria Island, Lagos, and our amenities (24/7 concierge, fine dining, high-speed Wi-Fi, premium security). Help guests find rooms, book stays, or learn about our facilities. Keep responses concise and luxury-oriented.",
        temperature: 0.7,
        topP: 0.8,
        topK: 40
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I apologize, but I am experiencing a brief connection issue. How else may I assist you with your stay at Rayjok?";
  }
};
