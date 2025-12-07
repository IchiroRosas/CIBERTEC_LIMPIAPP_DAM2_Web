import { Component, Inject, OnInit } from '@angular/core';
import { PrincipalService } from '../../services/principal.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SolicitudServicio, Usuario } from '../../../../shared/models/dto';
import { Observable, take } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ver-asignar-pedido',
  templateUrl: './ver-asignar-pedido.component.html',
  styleUrls: ['./ver-asignar-pedido.component.css']
})
export class VerAsignarPedidoComponent implements OnInit {

  limpiadores!: Observable<Usuario[]>;
  solicitud!: SolicitudServicio;
  asignarLimpiadorForm!: FormGroup;

  constructor(
    private principalService: PrincipalService,
    @Inject(MAT_DIALOG_DATA) public data: { solicitudSeleccionada: SolicitudServicio },
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.solicitud = this.data.solicitudSeleccionada;
    this.limpiadores = this.principalService.obtenerLimpiadores()
    this.asignarLimpiadorForm = new FormGroup({
      'limpiadorUid': new FormControl(null, Validators.required)
    });
  }

  asignarLimpiador() {
    const solicitudId = this.solicitud.id!;
    const limpiadorSeleccionadoUid = this.asignarLimpiadorForm.get('limpiadorUid')?.value;

    this.limpiadores.pipe(take(1)).subscribe(limpiadoresList => {
      const limpiadorSeleccionado = limpiadoresList.find(limpiador => limpiador.uid === limpiadorSeleccionadoUid);

      if (limpiadorSeleccionado) {
        this.principalService.asignarLimpiadorASolicitud(solicitudId, limpiadorSeleccionado)
          .then(() => {
            alert("✅ Limpiador asignado con éxito!");
            this.cerrarDialog();
          })
          .catch(error => {
            alert("❌ Error al asignar limpiador.");
            console.error("Error de Firestore:", error);
          });
      } else {
        alert("Error interno: Limpiador no encontrado.");
      }
    });
  }

  cerrarDialog() {
    this.dialog.closeAll();
  }

}
