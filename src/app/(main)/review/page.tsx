import type { Metadata } from "next";
import { ReviewResponse } from "@/types/groq";
import getGroqReview from "@/app/api/groq/route";

export const metadata: Metadata = {
  title: "Review",
  description: "Author: Antonio Selvas, Category: programing",
};

export default async function ReviewPage(typeReviewId: number, code: string) {
  const explication = getGroqReview(typeReviewId, code);


  return (
    <section>
      <div>
        <h2>{explication.}</h2>
        <h4>lenguaje: {props.lenguage}</h4>
      </div>
    </section>
  );
}
