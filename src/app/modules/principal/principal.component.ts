import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VerAsignarPedidoComponent } from './components/ver-asignar-pedido/ver-asignar-pedido.component';
import { PrincipalService } from './services/principal.service';
import { SolicitudServicio } from '../../shared/models/dto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(public dialog: MatDialog, private principalService: PrincipalService) { }

  solicitudes!: Observable<SolicitudServicio[]>;

  ngOnInit() {
    this.solicitudes = this.principalService.obtenerSolicitudesPendientes();
  }

  abrirDialogVerAsignar(solicitud: SolicitudServicio) {
    const dialogRef = this.dialog.open(VerAsignarPedidoComponent, {
      minWidth: '50vw',
      minHeight: '50vh',
      data: { solicitudSeleccionada: solicitud }
    });
  }

}
