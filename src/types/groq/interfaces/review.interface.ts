export interface ReviewResponse {
  titulo: string;
  lenguage: string;
  ListaDeExplicaciones: ListaDeExplicacione[];
  errores: null;
}

export interface ListaDeExplicacione {
  seccion: string;
  explicacion: string;
  codigo: string;
}

export interface requesReviewInterface {
  typeReviewId: number;
  code: string;
}
