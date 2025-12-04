import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { SolicitudServicio } from '../../../shared/models/dto';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  constructor(private firestore: Firestore) { }

  obtenerSolicitudesPendientes(): Observable<SolicitudServicio[]> {
    const solicitudesRef = collection(this.firestore, 'solicitudesServicio');
    const consultaPendientes = query(
      solicitudesRef, 
      where('estado', '==', 'pendiente')
    );
    return collectionData(consultaPendientes, { idField: 'id' }) as Observable<SolicitudServicio[]>;
  }

}
