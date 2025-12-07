import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './shared/layout/index/index.component';
import { AuthGuard } from './core/components/guard/auth.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
  },
  {
    path: '', component: IndexComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'principal', pathMatch: 'full' },
      { path: 'principal', loadChildren: () => import('./modules/principal/principal.module').then(m => m.PrincipalModule) },
      { path: 'asignados', loadChildren: () => import('./modules/asignados/asignados.module').then(m => m.AsignadosModule) },
      { path: 'finalizados', loadChildren: () => import('./modules/finalizados/finalizados.module').then(m => m.FinalizadosModule) }
    ]
  },
  {
    path: '**', redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
