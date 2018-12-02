import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { QrComponent } from './qr/qr.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import { FoodbankComponent } from './foodbank/foodbank.component';
import { AgmCoreModule } from '@agm/core';

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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCO41az6rDXCPiZbNFRN7ffBA_lmP1F04I'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
