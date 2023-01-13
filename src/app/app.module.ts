import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MedicosComponent } from './intermedio/espias/medicos.component';
import { MedicoComponent } from './intermedio-2/medico/medico.component';
import { HospitalComponent } from './intermedio-2/hospital/hospital.component';
import { IncrementadorComponent } from './intermedio-2/incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { RUTAS } from './avanzado/rutas/app.routes';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './avanzado/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot( RUTAS )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
