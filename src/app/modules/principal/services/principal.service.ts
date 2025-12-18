import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore, or, query, where, updateDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { SolicitudServicio, Usuario } from '../../../shared/models/dto';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  constructor(private firestore: Firestore) { }

  obtenerSolicitudesPendientes(): Observable<SolicitudServicio[]> {
    const solicitudesRef = collection(this.firestore, 'solicitudesServicio');
    const consultaPendientes = query(
      solicitudesRef,
      where('estado', 'in', ['pendiente', 'rechazado'])
    );
    return collectionData(consultaPendientes, { idField: 'id' }) as Observable<SolicitudServicio[]>;
  }

  obtenerLimpiadores(): Observable<Usuario[]> {
    const usuariosRef = collection(this.firestore, 'users');
    const limpiadores = query(
      usuariosRef,
      where('rol', '==', 'limpiador')
    );
    return collectionData(limpiadores, { idField: 'uid' }) as Observable<Usuario[]>;
  }

  asignarLimpiadorASolicitud(solicitudAModificarId: string, limpiador: Usuario) {
    const solicitudRef = doc(this.firestore, `solicitudesServicio`, solicitudAModificarId);

    const solicitudActualizada: any = {
      estado: 'asignado',
      limpiadorUid: limpiador.uid,
      limpiadorNombres: limpiador.nombres,
      limpiadorApellidos: limpiador.apellidos,
      limpiadorCelular: limpiador.celular,
      limpiadorDni: limpiador.dni
    }

    return updateDoc(solicitudRef, solicitudActualizada)
      .then(() => {
        console.log("Solicitud actualizada exitosamente con el limpiador:", limpiador.uid);
      })
      .catch(error => {
        console.error("Error al asignar limpiador:", error);
        throw error;
      });
  }

}
