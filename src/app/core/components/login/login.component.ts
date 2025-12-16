import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth, AuthError, signInWithEmailAndPassword } from '@angular/fire/auth';
import { LoginService } from '../../services/login.service';
import { Usuario } from '../../../shared/models/dto';
import Swal from 'sweetalert2';
import { take } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm!: FormGroup
  isLoading: boolean = false;
  errorMessage: string | null = null;
  usuarioLogeado: Usuario[] = [];

  constructor(
    private router: Router,
    private auth: Auth,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginForm = new FormBuilder().group({
      'correo': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  async iniciarSesion() {
    this.isLoading = true;
    this.errorMessage = null;
    const correo = this.loginForm.value.correo;
    const password = this.loginForm.value.password;

    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, correo, password);
      this.loginService.obtenerDatosUsuarioLogeado(userCredential.user.uid).pipe(take(1)).subscribe(usuarioLogeado => {

        if (usuarioLogeado.length === 0) {
          this.auth.signOut();
          this.errorMessage = 'Acceso denegado. No eres administrador.';
          this.isLoading = false;
          return;
        }

        this.llenarSessionStorage(usuarioLogeado[0]);
        this.router.navigate(['/principal']);
        this.mensajeBienvenida();
        this.isLoading = false;

      });
      
    } catch (error) {
      this.errorMessage = 'Credenciales inválidas. Verifica tu correo y contraseña.';
      this.isLoading = false;
    }
  }

  llenarSessionStorage(usuarioLogeado: Usuario) {
    sessionStorage.setItem('nombres', usuarioLogeado.nombres || '');
    sessionStorage.setItem('apellidos', usuarioLogeado.apellidos || '');
    sessionStorage.setItem('email', usuarioLogeado.email || '');
    sessionStorage.setItem('nroDocumento', usuarioLogeado.dni || '');
    sessionStorage.setItem('celular', usuarioLogeado.celular || '');
  }

  mensajeBienvenida() {
    Swal.fire({
      icon: 'success',
      title: `¡Bienvenido(a) ${sessionStorage.getItem('nombres')} ${sessionStorage.getItem('apellidos')}!`,
      text: 'Has iniciado sesión correctamente.',
      timer: 2000,
      showConfirmButton: false
    });
  }

}