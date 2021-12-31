import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { GraficosBarraHorizontalComponent } from './graficos-barra-horizontal/graficos-barra-horizontal.component';

// Para que las graficas funcionen

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

// Sweet alert 2

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';



@NgModule({
  declarations: [
    NavbarComponent,
    GraficosBarraHorizontalComponent
  ],
  exports: [
    NavbarComponent,
    GraficosBarraHorizontalComponent,
    SweetAlert2Module
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    SweetAlert2Module
  ]
})
export class ComponentsModule { }
