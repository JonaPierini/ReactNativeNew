//Cambio la interface por las dudas de que si la data que viene del get en algun momento cambia

export interface Movie {
  id: number;
  title: string;
  description: string;
  releaseDate: Date;
  rating: number;
  poster: any;
  backdrop: string;
}

//  EXTIENDE TODA LA INTERFACE Y LE AGREGA ESTA NUEVA DATA
export interface FullMovie extends Movie {
  genres: string[];
  duration: number;
  budget: number;
  originalTitle: string;
  productionCompanie: string[];
}
