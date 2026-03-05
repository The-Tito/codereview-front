import { ReviewResponse } from "@/types/groq/interfaces/review.interface";

const KEY = "reviewData";

export function saveReview(data: ReviewResponse): void {
  sessionStorage.setItem(KEY, JSON.stringify(data));
}

export function loadReview(): ReviewResponse | null {
  const stored = sessionStorage.getItem(KEY);
  if (!stored) return null;
  return JSON.parse(stored) as ReviewResponse;
}

export function clearReview(): void {
  sessionStorage.removeItem(KEY);
}
