import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VerAsignarPedidoComponent } from './components/ver-asignar-pedido/ver-asignar-pedido.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  constructor(public dialog: MatDialog) {}

  solicitudes = [
    {
      numero: 1,
      cliente: 'Fernando',
      categoria: 'Limpieza de baños',
      estado: 'Pendiente',
      limpador: null,          
      horarioInicio: '12:00 PM',
      duracionEstimada: '2h',
      direccion: 'Av. Siempre Viva 123',
      precioFinal: 50
    },
    {
      numero: 2,
      cliente: 'Ana Lu',
      categoria: 'Sofas',
      estado: 'Pendiente',
      limpador: null,
      horarioInicio: '10:00 AM',
      duracionEstimada: '1h',
      direccion: 'Calle Falsa 456',
      precioFinal: 30
    }
  ];

  abrirDialogVerAsignar(solicitud: any) {
    const dialogRef = this.dialog.open(VerAsignarPedidoComponent, {
      width: '70vw',
      height: '80vh',
      data: { solicitud: solicitud }
    });
  }
  
}
