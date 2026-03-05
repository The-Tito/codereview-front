import { saveReview } from "@/lib/reviewStorage";
import {
  requesReviewInterface,
  ReviewResponse,
} from "@/types/groq/interfaces/review.interface";

export async function submitCodeReview(
  payload: requesReviewInterface,
): Promise<void> {
  const res = await fetch("/api/review", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("Error al obtener el análisis");

  const data: ReviewResponse = await res.json();
  saveReview(data);
}
