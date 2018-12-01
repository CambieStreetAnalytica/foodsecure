import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    GroceriesComponent,
    HomeComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
