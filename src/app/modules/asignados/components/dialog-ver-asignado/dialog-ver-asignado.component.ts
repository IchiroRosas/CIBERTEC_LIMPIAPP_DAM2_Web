import { Component, Inject, OnInit } from '@angular/core';
import { SolicitudServicio } from '../../../../shared/models/dto';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-ver-asignado',
  templateUrl: './dialog-ver-asignado.component.html',
  styleUrl: './dialog-ver-asignado.component.css'
})
export class DialogVerAsignadoComponent implements OnInit {

  solicitud!: SolicitudServicio;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { solicitudSeleccionada: SolicitudServicio },
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.solicitud = this.data.solicitudSeleccionada;
  }

  cerrarDialog() {
    this.dialog.closeAll();
  }

}
