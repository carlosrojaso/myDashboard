import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { DashboardCardSpawnerComponentComponent } from './dashboard-card-spawner-component/dashboard-card-spawner-component.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponentComponent,
    DashboardCardSpawnerComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
