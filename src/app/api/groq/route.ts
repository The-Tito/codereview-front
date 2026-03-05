import { Groq } from "groq-sdk";
import promptBuilder from "../utils/prompBuilder";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export default async function getGroqReview(
  typeReviewId: number,
  code: string,
) {
  const { typeReview, schema } = promptBuilder(typeReviewId);

  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `Eres un analista de codigo Senior y te especialisas en explicar codigo de cualquier lenguaje, realizaras la expliacion de la siguiente mandera ${typeReview}\n                Responde solo en formato JSON usando el siguiente schema: ${schema}`,
      },
      {
        role: "user",
        content: code,
      },
    ],
    model: "llama-3.1-8b-instant",
    temperature: 1,
    max_completion_tokens: 1024,
    top_p: 1,
    stream: true,
    stop: null,
  });
}
