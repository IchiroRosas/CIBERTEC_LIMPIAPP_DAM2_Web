import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Usuario } from '../../../shared/models/dto';
import { LoginService } from '../../services/login.service';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})

export class PerfilComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private loginService: LoginService,
    private auth: Auth
  ) { }

  usuario!: Usuario;

  ngOnInit(): void {
    this.loginService.obtenerDatosUsuarioLogeado(this.auth.currentUser!.uid).subscribe(users => {
     this.usuario = users[0];
    });
  }

  cerrarDialog() {
    this.dialog.closeAll();
  }

}
