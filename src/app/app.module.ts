import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EgresosComponent } from './views/egresos/egresos.component';
import { IngresosComponent } from './views/ingresos/ingresos.component';
import { SaldoComponent } from './views/saldo/saldo.component';
import { SidenavComponent } from './views/sidenav/sidenav.component';
import { HeaderComponent } from './views/header/header.component';
import { CardsComponent } from './views/cards/cards.component';
import { GraficsComponent } from './views/grafics/grafics.component';
import { BalanceComponent } from './views/balance/balance.component';
import { TransaccionesComponent } from './views/transacciones/transacciones.component';
import { TableComponent } from './views/table/table.component';

import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';
import { MaterialModule } from './shared/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SidenavComponent,
    HeaderComponent,
    CardsComponent,
    EgresosComponent,
    IngresosComponent,
    SaldoComponent,
    GraficsComponent,
    BalanceComponent,
    TransaccionesComponent,
    TableComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgChartsModule,
  ],
  providers: [
    { provide: NgChartsConfiguration, useValue: { generateColors: false },},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
