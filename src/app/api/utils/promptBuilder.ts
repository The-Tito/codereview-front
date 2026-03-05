export default function promptBuilder(typeReviewId: number): schemaInterface {
  let schema: string;
  let typeReview: string;
  if (typeReviewId === 1) {
    typeReview = "General";
    schema =
      '{\ntitulo: "titulo que haga referencia a lo que trata el codigo";\n  lenguaje: "lenguaje del codigo analizado";\n  ListaDeExplicaciones: [\n    {\n      seccion: "subtitulo de una seccion de codigo";\n      explicacion: "explicacion de esa seccion de codigo";\n      codigo: "fraccion de codigo que pertenece a la seccion explicada";\n    },\n    {\n      seccion: "subtitulo de una seccion de codigo";\n      explicacion: "explicacion de esa seccion de codigo";\n      codigo: "fraccion de codigo que pertenece a la seccion explicada";\n    },\n  ];\n  errores: "errores encontrados en el codigo";\n}';
  } else {
    typeReview = "Linea por Linea";
    schema =
      '{\ntitulo: "titulo que haga referencia a lo que trata el codigo";\n  lenguaje: "lenguaje del codigo analizado";\n  ListaDeExplicaciones: [\n    {\n      linea: "subtitulo de la linea de codigo a explicar";\n      explicacion: "explicacion de esa linea de codigo";\n      codigo: "linea de codigo que pertenece a la explicacion";\n    },\n    {\n      linea: "subtitulo de la linea de codigo a explicar";\n      explicacion: "explicacion de esa linea de codigo";\n      codigo: "linea de codigo que pertenece a la explicacion";\n    },\n  ];\n  errores: "errores encontrados en el codigo";\n}';
  }

  return {
    typeReview: typeReview,
    schema: schema,
  };
}

interface schemaInterface {
  typeReview: string;
  schema: string;
}
