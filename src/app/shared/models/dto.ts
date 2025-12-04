import { Timestamp } from "@angular/fire/firestore";

export interface SolicitudServicio {
  id?: string; 
  
  cantidad: number;
  categoriaServicio: string;
  precioTotal: number;
  precioUnitario: number;
  
  clienteApellidos: string;
  clienteCelular: string;
  clienteDni: string;
  clienteNombres: string;
  direccion: string;
  
  limpiadorApellidos: string | null;
  limpiadorCelular: string | null;
  limpiadorDni: string | null;
  limpiadorNombres: string | null;
  
  estado: 'pendiente' | 'asignado' | 'finalizado';
  informacionAdicional: string;
  
  fechaHora: Timestamp; 
}

export interface Usuario {
  uid: string; 
  
  apellidos: string;
  celular: string;
  dni: string;
  email: string;
  nombres: string;
  
  rol: 'administrador' | 'limpiador' | 'cliente';
}