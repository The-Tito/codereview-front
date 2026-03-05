import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formulario",
  description: "Author: Antonio Selvas, Category: programing",
};

export default function FormPage() {
  return (
    <section className="flex flex-col w-max h-max">
      <div className=" rounded-xl w-160 ">
        <form action="#" className="flex flex-col">
          <div className="flex justify-between items-center">
            <label
              htmlFor=""
              className="text-white py-8 text-2xl font-bold block"
            >
              Pega tu codigo:
            </label>

            <select
              defaultValue=""
              className="text-base font-medium border border-border-secondary rounded-2xl px-10 py-8 text-foreground bg-background-secondary outline-none h-full "
            >
              <option value="" disabled>
                Nivel de explicacion
              </option>
              <option>General</option>
              <option>Linea a linea</option>
            </select>
          </div>
          <div className="h-180 shadow-[0_0_24px_rgba(194,39,245)] rounded-xl">
            <textarea
              name="code"
              className=" bg-white rounded-xl text-black p-6 block resize-none h-full w-full"
              placeholder="Codigo aqui ->"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[rgba(194,39,245)] rounded-lg h-10 my-6 font-bold text-lg"
            >
              Explicar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
