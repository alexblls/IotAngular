import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DispositiusListComponent } from './dispositius/dispositius-list/dispositius-list.component';
import { DispositiusItemComponent } from './dispositius/dispositius-item/dispositius-item.component';
import { HomeComponent } from './components/home/home.component';
import { DispositiusService } from './dispositius/dispositius.service';
import { HttpClientModule } from '@angular/common/http';
import { DispositiusDetallComponent } from './dispositius/dispositius-detall/dispositius-detall.component';
import { EnxufatPipe } from './dispositius/enxufat.pipe';
import { FiltrarDispositiusPipe } from './dispositius/filtrar-dispositius.pipe'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { MostrarmesDirective } from './directives/mostrarmes.directive';
import { NouDispositiuComponent } from './dispositius/nou-dispositiu/nou-dispositiu.component';
import { EditarDispositiuComponent } from './dispositius/editar-dispositiu/editar-dispositiu.component';
import { MinTempsDirective } from './directives/validators/min-temps.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DispositiusListComponent,
    DispositiusItemComponent,
    HomeComponent,
    DispositiusDetallComponent,
    EnxufatPipe,
    FiltrarDispositiusPipe,
    LoginComponent,
    MostrarmesDirective,
    NouDispositiuComponent,
    EditarDispositiuComponent,
    MinTempsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DispositiusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
