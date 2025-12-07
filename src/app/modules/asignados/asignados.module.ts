import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsignadosRoutingModule } from './asignados-routing.module';
import { AsignadosComponent } from './asignados.component';
import { DialogVerAsignadoComponent } from './components/dialog-ver-asignado/dialog-ver-asignado.component';

@NgModule({
  declarations: [
    AsignadosComponent,
    DialogVerAsignadoComponent
  ],
  imports: [
    CommonModule,
    AsignadosRoutingModule,
  ]
})
export class AsignadosModule { }
