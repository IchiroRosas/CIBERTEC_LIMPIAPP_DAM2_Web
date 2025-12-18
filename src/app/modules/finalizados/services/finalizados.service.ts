import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore, query, where } from '@angular/fire/firestore';
import { SolicitudServicio } from '../../../shared/models/dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinalizadosService {

  constructor(private firestore: Firestore) { }
  
    obtenerSolicitudesFinalizadas(): Observable<SolicitudServicio[]> {
      const solicitudesRef = collection(this.firestore, 'solicitudesServicio');
      const consultaFinalizadas = query(
        solicitudesRef,
        where('estado', 'in', ['finalizado', 'cancelado'])
      );
      return collectionData(consultaFinalizadas, { idField: 'id' }) as Observable<SolicitudServicio[]>;
    }

}
