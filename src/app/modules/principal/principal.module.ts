import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';

import { VerAsignarPedidoComponent } from './components/ver-asignar-pedido/ver-asignar-pedido.component';
import { PrincipalComponent } from './principal.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    PrincipalComponent,
    VerAsignarPedidoComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    SharedModule
  ]
})
export class PrincipalModule { }
