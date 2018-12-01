import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { QrComponent } from './qr/qr.component';
import { AuthorizeComponent } from './authorize/authorize.component';

@NgModule({
  declarations: [
    AppComponent,
    GroceriesComponent,
    HomeComponent,
    MapComponent,
    QrComponent,
    AuthorizeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
