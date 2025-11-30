import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { BodyComponent } from './layout/body/body.component';
import { IndexComponent } from './layout/index/index.component';

@NgModule({
  declarations: [SidebarComponent, BodyComponent, IndexComponent],
  imports: [CommonModule, RouterModule],
  exports: [SidebarComponent, BodyComponent, IndexComponent, RouterModule]  
})
export class SharedModule { }
