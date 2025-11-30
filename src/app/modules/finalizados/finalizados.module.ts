import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinalizadosRoutingModule } from './finalizados-routing.module';
import { VerFinalizadoComponent } from './components/ver-finalizado/ver-finalizado.component';
import { FinalizadosComponent } from './finalizados.component';


@NgModule({
  declarations: [
    FinalizadosComponent,
    VerFinalizadoComponent
  ],
  imports: [
    CommonModule,
    FinalizadosRoutingModule
  ]
})
export class FinalizadosModule { }
