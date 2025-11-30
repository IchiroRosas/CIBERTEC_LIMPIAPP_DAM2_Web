import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignadosComponent } from './asignados.component';

const routes: Routes = [
    {
      path: '', component: AsignadosComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsignadosRoutingModule { }
