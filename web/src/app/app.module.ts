import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { QrComponent } from './qr/qr.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import { FoodbankComponent } from './foodbank/foodbank.component';

@NgModule({
  declarations: [
    AppComponent,
    GroceriesComponent,
    HomeComponent,
    MapComponent,
    QrComponent,
    AuthorizeComponent,
    FoodbankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
