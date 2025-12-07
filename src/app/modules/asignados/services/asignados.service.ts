import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore, or, query, where } from '@angular/fire/firestore';
import { SolicitudServicio } from '../../../shared/models/dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsignadosService {

  constructor(private firestore: Firestore) { }

  obtenerSolicitudesAsignadas(): Observable<SolicitudServicio[]> {
    const solicitudesRef = collection(this.firestore, 'solicitudesServicio');
    const consultaPendientes = query(
      solicitudesRef,
      or(where('estado', '==', 'asignado'), where('estado', '==', 'aceptado'))
    );
    return collectionData(consultaPendientes, { idField: 'id' }) as Observable<SolicitudServicio[]>;
  }
}
