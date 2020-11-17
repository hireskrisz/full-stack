import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {TicketsPageComponent} from "./tickets-page/tickets-page.component";
import {AdminPageComponent} from "./admin-page/admin-page.component";
import {ProfilPageComponent} from "./profil-page/profil-page.component";
import {CartPageComponent} from "./cart-page/cart-page.component";
import {RegistrationPageComponent} from "./registration-page/registration-page.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'tickets', component: TicketsPageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'profile', component: ProfilPageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'registration', component: RegistrationPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
