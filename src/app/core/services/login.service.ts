import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { map, Observable, of } from 'rxjs';
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

  isAuthenticated(): Observable<boolean> {

    if (!this.auth.currentUser) {
      return of(false);
    }

    const users = collection(this.firestore, 'users');
    const currentAdmin = query(
      users,
      where('rol', '==', 'administrador'),
      where('uid', '==', this.auth.currentUser.uid)
    );

    return collectionData(currentAdmin).pipe(
      map(users => users.length > 0)
    );

  }

  logout() {
    sessionStorage.clear();
    this.auth.signOut();
    this.router.navigate(['/login']);
  }

  obtenerDatosUsuarioLogeado(uid: string): Observable<Usuario[]> {
    const usuariosRef = collection(this.firestore, 'users');
    const usuarioLogeadoData = query(
      usuariosRef,
      where('rol', '==', 'administrador'), 
      where('uid', '==', uid)
    );
    return collectionData(usuarioLogeadoData, { idField: 'uid' }) as Observable<Usuario[]>;
  }

}
