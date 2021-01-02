import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ProfilPageComponent } from './profil-page/profil-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { TicketsPageComponent } from './tickets-page/tickets-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TicketComponent } from './ticket/ticket.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { NewTicketDialogComponent } from './new-ticket-dialog/new-ticket-dialog.component';
import {MatSelectModule} from "@angular/material/select";
import {CustomDatePipe} from "./pipes/custom-date.pipe";
import {registerLocaleData} from "@angular/common";
import localeHu from '@angular/common/locales/hu'
import { Interceptor } from "./services/interceptor.service";
import {AuthService} from "./services/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ProfilPageComponent,
    AdminPageComponent,
    CartPageComponent,
    TicketsPageComponent,
    SearchBarComponent,
    TicketComponent,
    RegistrationPageComponent,
    NewTicketDialogComponent,
    CustomDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatStepperModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    HttpClientModule,
    MatSelectModule
  ],
  providers: [
    CustomDatePipe,
    {
      provide: LOCALE_ID,
      useValue: 'hu-HU'
    },
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeHu, 'hu-HU')
  }
}
