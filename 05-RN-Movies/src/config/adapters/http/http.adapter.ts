// Este archivo esta pensado para que si la libreria cambia nuestro código no se vea afectado

export abstract class HttpAdapter {
  // el tipo T es generico
  abstract get<T>(url: string, options?: any): Promise<T>;
}
