import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogVerAsignadoComponent } from './components/dialog-ver-asignado/dialog-ver-asignado.component';

@Component({
  selector: 'app-asignados',
  templateUrl: './asignados.component.html',
  styleUrl: './asignados.component.css'
})
export class AsignadosComponent {

  constructor(public dialog: MatDialog) { }

  solicitudes = [
    {
      numero: 1,
      cliente: 'Fernando',
      categoria: 'Limpieza de baños',
      estado: 'Asignado',
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
      estado: 'Asignado',
      limpador: 'Carlos López',
      horarioInicio: '10:00 AM',
      duracionEstimada: '1h',
      direccion: 'Calle Falsa 456',
      precioFinal: 30
    }
  ];

  abrirDialogVerAsignado(solicitud: any) {
    const dialogRef = this.dialog.open(DialogVerAsignadoComponent, {
      width: '70vw',
      height: '80vh',
      data: { solicitud: solicitud }
    });
  }


}
