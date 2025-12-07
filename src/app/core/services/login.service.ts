import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../../shared/models/dto';
import { query, and, collection, collectionData, Firestore, where } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private router: Router
  ) { }

  isAuthenticated(): boolean {
    return this.auth.currentUser !== null;
  }

  async logout() {
    sessionStorage.clear();
    await this.auth.signOut();
    this.router.navigate(['/login']);
  }

  obtenerDatosUsuarioLogeado(uid: string): Observable<Usuario[]> {
    const usuariosRef = collection(this.firestore, 'users');
    const usuarioLogeadoData = query(
      usuariosRef,
      and(where('rol', '==', 'administrador'), where('uid', '==', uid))
    );
    return collectionData(usuarioLogeadoData, { idField: 'uid' }) as Observable<Usuario[]>;
  }

}
