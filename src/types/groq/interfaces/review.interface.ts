export interface ReviewResponse {
  titulo: string;
  lenguage: string;
  ListaDeExplicaciones: ExplicacionGeneral[] | ExplicacionLinea[];
  errores: string | null;
}

export interface ExplicacionGeneral {
  seccion: string;
  explicacion: string;
  codigo: string;
}

export interface ExplicacionLinea {
  linea: string;
  explicacion: string;
  codigo: string;
}

export interface requesReviewInterface {
  typeReviewId: number;
  code: string;
}
