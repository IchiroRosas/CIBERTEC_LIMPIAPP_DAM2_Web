import { Component, Inject } from '@angular/core';
import { SolicitudServicio } from '../../../../shared/models/dto';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ver-finalizado',
  templateUrl: './ver-finalizado.component.html',
  styleUrl: './ver-finalizado.component.css'
})
export class VerFinalizadoComponent {

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
