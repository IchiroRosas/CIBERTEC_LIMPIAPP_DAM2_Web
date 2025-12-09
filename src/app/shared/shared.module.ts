import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BodyComponent } from './layout/body/body.component';
import { IndexComponent } from './layout/index/index.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

@NgModule({
  declarations: [BodyComponent, IndexComponent, NavbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [BodyComponent, IndexComponent, RouterModule]  
})
export class SharedModule { }
