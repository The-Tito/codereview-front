"use client";

import { submitCodeReview } from "@/services/reviewService";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function FormPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      await submitCodeReview({
        code: formData.get("code") as string,
        typeReviewId: Number(formData.get("typeReviewId")),
      });
      router.push("/review");
    } catch (error: any) {
      setError(error.message || "Ocurrió un error inesperado.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="flex flex-col w-full h-full items-center">
      <div className=" rounded-xl w-160 ">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex justify-between items-center">
            <label
              htmlFor=""
              className="text-white py-8 text-2xl font-bold block"
            >
              Pega tu codigo:
            </label>

            <select
              name="typeReviewId"
              defaultValue=""
              className="text-base font-medium border border-border-secondary rounded-2xl px-10 py-8 text-foreground bg-background-secondary outline-none h-full "
            >
              <option value="" disabled>
                Nivel de explicacion
              </option>
              <option value="1">General</option>
              <option value="2">Linea a linea</option>
            </select>
          </div>
          <div className="h-180 shadow-[0_0_24px_rgba(194,39,245)] rounded-xl">
            <textarea
              name="code"
              className=" bg-white rounded-xl text-black p-6 block resize-none h-full w-full"
              placeholder="Codigo aqui ->"
            ></textarea>
            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[rgba(194,39,245)] rounded-lg h-10 my-6 font-bold text-lg disabled:opacity-50"
            >
              {loading ? "Analizando..." : "Explicar"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
