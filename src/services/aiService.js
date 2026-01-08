import OpenAI from "openai";
import config from "../../config.js";

const openai = new OpenAI({
  apiKey: config.openAiKey,
});

const INTWithAi = async (text) => {
  try {
    const prompt = `
Ai the following text into one category:
Complaint, Query, Feedback, or Other.

Text: "${text}"

Respond with only the category name.
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const category = response.choices[0].message.content.trim();

    const confidenceMap = {
      Complaint: 0.9,
      Query: 0.85,
      Feedback: 0.8,
      Other: 0.7,
    };

    return {
      category,
      confidence: confidenceMap[category] || 0.6,
    };

  } catch (error) {
    console.error("AI failed, using fallback:", error.message);

    const t = text.toLowerCase();

    if (t.includes("damage") || t.includes("unhappy")) {
      return { category: "Complaint", confidence: 0.9 };
    }
    if (t.includes("how") || t.includes("when")) {
      return { category: "Query", confidence: 0.85 };
    }
    if (t.includes("good") || t.includes("thank")) {
      return { category: "Feedback", confidence: 0.8 };
    }

    return { category: "Other", confidence: 0.7 };
  }
};

export default INTWithAi;
