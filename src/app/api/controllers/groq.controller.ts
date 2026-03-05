import type { requesReviewInterface } from "@/types/groq";
import getGroqReview from "../groq/route";

export class groqController {
  static async getReview(req: requesReviewInterface, res: Response) {
    try {
      const data = await getGroqReview(req.typeReviewId, req.code);

      data.status(200).json();
    } catch (error: any) {}
  }
}
