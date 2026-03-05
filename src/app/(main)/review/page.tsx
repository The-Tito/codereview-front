"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { loadReview } from "@/lib/reviewStorage";
import { ReviewResponse } from "@/types/groq/interfaces/review.interface";

export default function ReviewPage() {
  const [data, setData] = useState<ReviewResponse | null>(null);
  const router = useRouter();

  useEffect(() => {
    const review = loadReview();
    if (!review) router.push("/form");
    else setData(review);
  }, [router]);

  if (!data) return <p className="text-white">Cargando...</p>;

  return (
    <section className="flex flex-col p-8 text-white w-full h-max items-center">
      <div className="mb-6 flex flex-col w-full justify-start">
        <h2 className="text-3xl font-bold">{data.titulo}</h2>
        <h4 className="text-lg text-purple-400 mt-1">
          Lenguaje: {data.lenguage || "Lenguaje no reconocido"}
        </h4>
      </div>
      <div className="flex flex-col gap-6">
        {data.ListaDeExplicaciones.map((item, i) => (
          <div
            key={i}
            className="bg-background-secondary rounded-xl p-6 border border-border-secondary"
          >
            <h3 className="text-xl font-semibold text-purple-300 mb-2">
              {"seccion" in item ? item.seccion : item.linea}
            </h3>
            <p className="mb-3">{item.explicacion}</p>
            <pre className="bg-black rounded-lg p-4 overflow-x-auto text-sm text-green-400">
              <code>{item.codigo}</code>
            </pre>
          </div>
        ))}
      </div>
      {data.errores && (
        <div className="mt-6 bg-red-900/40 border border-red-500 rounded-xl p-4 w-full">
          <h3 className="font-bold text-red-400 mb-1">Errores detectados:</h3>
          <p>{data.errores}</p>
        </div>
      )}
      <button
        onClick={() => router.push("/")}
        className="mt-8 bg-[rgba(194,39,245)] rounded-lg px-6 py-3 font-bold w-60"
      >
        Analizar otro código
      </button>
    </section>
  );
}
