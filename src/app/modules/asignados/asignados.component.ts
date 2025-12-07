import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogVerAsignadoComponent } from './components/dialog-ver-asignado/dialog-ver-asignado.component';
import { AsignadosService } from './services/asignados.service';
import { SolicitudServicio } from '../../shared/models/dto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-asignados',
  templateUrl: './asignados.component.html',
  styleUrl: './asignados.component.css'
})
export class AsignadosComponent implements OnInit {

  constructor(public dialog: MatDialog, private asignadosService: AsignadosService) { }

  solicitudes!: Observable<SolicitudServicio[]>;

  ngOnInit() {
    this.solicitudes = this.asignadosService.obtenerSolicitudesAsignadas();
  }


  abrirDialogVerAsignado(solicitud: any) {
    const dialogRef = this.dialog.open(DialogVerAsignadoComponent, {
      minWidth: '30vw',
      minHeight: '30vh',
      data: { solicitudSeleccionada: solicitud }
    });
  }


}
