import { Component } from '@angular/core';
import { LoginService } from '../../../core/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private loginService: LoginService) { }

  async cerrarSesion() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡Vas a cerrar tu sesión!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6', // Azul
      cancelButtonColor: '#d33', // Rojo
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.loginService.logout();
      }
    });
  }
}