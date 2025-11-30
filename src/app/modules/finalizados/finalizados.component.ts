import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VerFinalizadoComponent } from './components/ver-finalizado/ver-finalizado.component';

@Component({
  selector: 'app-finalizados',
  templateUrl: './finalizados.component.html',
  styleUrl: './finalizados.component.css'
})
export class FinalizadosComponent {

  constructor(public dialog: MatDialog) {}

  solicitudes = [
    {
      numero: 1,
      cliente: 'Fernando',
      categoria: 'Limpieza de baños',
      estado: 'Finalizado',
      limpador: 'Carlos López',          
      horarioInicio: '12:00 PM',
      duracionEstimada: '2h',
      direccion: 'Av. Siempre Viva 123',
      precioFinal: 50
    },
    {
      numero: 2,
      cliente: 'Ana Lu',
      categoria: 'Sofas',
      estado: 'Finalizado',
      limpador: 'Carlos López',
      horarioInicio: '10:00 AM',
      duracionEstimada: '1h',
      direccion: 'Calle Falsa 456',
      precioFinal: 30
    }
  ];

  abrirDialogVerFinalizado(solicitud: any) {
    const dialogRef = this.dialog.open(VerFinalizadoComponent, {
      width: '70vw',
      height: '80vh',
      data: { solicitud: solicitud }
    });  }

}
