import { Timestamp } from "@angular/fire/firestore";

export interface SolicitudServicio {
  id?: string;
  
  cantidad?: number;
  categoriaServicio?: string;
  precioTotal?: number;
  precioUnitario?: number;
  
  clienteApellidos?: string;
  clienteCelular?: string;
  clienteDni?: string;
  clienteNombres?: string;
  solicitudDistrito?: string;
  solicitudDireccion?: string;
  
  limpiadorUid?: string | null;
  limpiadorApellidos?: string | null;
  limpiadorCelular?: string | null;
  limpiadorDni?: string | null;
  limpiadorNombres?: string | null;
  
  estado?: 'pendiente' | 'asignado' | 'aceptado' | 'rechazado' | 'finalizado';
  informacionAdicional?: string;
  
  fechaHora?: Timestamp; 
}

export interface Usuario {
  uid?: string; 
  
  apellidos?: string;
  celular?: string;
  dni?: string;
  email?: string;
  nombres?: string;
  distrito?: string;
  
  rol?: 'administrador' | 'limpiador' | 'cliente';
}