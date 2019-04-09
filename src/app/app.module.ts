import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EstadoComponent } from './estado/estado.component';
import { EstadoService } from './services/estado.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EstadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EstadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
