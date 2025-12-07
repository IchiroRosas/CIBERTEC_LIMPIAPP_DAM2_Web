import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VerFinalizadoComponent } from './components/ver-finalizado/ver-finalizado.component';
import { FinalizadosService } from './services/finalizados.service';
import { SolicitudServicio } from '../../shared/models/dto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-finalizados',
  templateUrl: './finalizados.component.html',
  styleUrl: './finalizados.component.css'
})
export class FinalizadosComponent implements OnInit {

  constructor(public dialog: MatDialog, private finalizadosService: FinalizadosService) { }

  solicitudesFinalizadas!: Observable<SolicitudServicio[]>;

  ngOnInit() {
    this.solicitudesFinalizadas = this.finalizadosService.obtenerSolicitudesFinalizadas();
  }

  abrirDialogVerFinalizado(solicitud: any) {
    const dialogRef = this.dialog.open(VerFinalizadoComponent, {
      minWidth: '50vw',
      minHeight: '50vh',
      data: { solicitudSeleccionada: solicitud }
    });
  }

}
