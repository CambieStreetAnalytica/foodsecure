import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GroceriesComponent} from './groceries/groceries.component';
import {HomeComponent} from './home/home.component';
import {QrComponent} from "./qr/qr.component";
import {FoodbankComponent} from "./foodbank/foodbank.component";


const routes: Routes = [
  { path: 'main', component: HomeComponent },
  { path: 'groceries', component: GroceriesComponent },
  { path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {path: 'authorize', component: QrComponent},
  {path: 'ams', component: FoodbankComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
