import { NextRequest, NextResponse } from "next/server";
import getGroqReview from "@/services/groqService";

export async function POST(req: NextRequest) {
  const { code, typeReviewId } = await req.json();

  const stream = await getGroqReview(typeReviewId, code);

  let fullText = "";
  for await (const chunk of stream) {
    fullText += chunk.choices[0]?.delta?.content ?? "";
  }

  const cleaned = fullText.replace(/```json|```/g, "").trim();

  try {
    const parsed = JSON.parse(cleaned);
    return NextResponse.json(parsed);
  } catch {
    return NextResponse.json(
      { error: "No se pudo parsear la respuesta de la IA", raw: fullText },
      { status: 500 },
    );
  }
}
