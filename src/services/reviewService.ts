import { saveReview } from "@/lib/reviewStorage";
import {
  requesReviewInterface,
  ReviewResponse,
} from "@/types/groq/interfaces/review.interface";

export async function submitCodeReview(
  payload: requesReviewInterface,
): Promise<void> {
  if (!payload.typeReviewId || payload.typeReviewId === null) {
    throw new Error("Debes seleccionar el tipo de analisis");
  }

  if (!payload.code || payload.code.trim().length < 10) {
    throw new Error("Debes agregar un codigo para analizar");
  }
  const res = await fetch("/api/review", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("Error al obtener el análisis");

  const data: ReviewResponse = await res.json();
  saveReview(data);
}
