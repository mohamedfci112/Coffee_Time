import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DropdownModule } from 'angular-bootstrap-md';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CoffeesComponent } from './components/coffees/coffees.component';
import { OrderComponent } from './components/order/order.component';
import { AgmCoreModule } from '@agm/core';
import {GoogleMapsAPIWrapper} from '@agm/core';
import { HttpModule } from '@angular/http';
import { Http } from "@angular/http";
import { AdminComponent } from './components/admin/admin.component';
import { CpanelComponent } from './components/cpanel/cpanel.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminService } from './admin.service';
import { FormGroup ,Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesService, FlashMessagesModule } from "angular2-flash-messages";
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AnimateOnScrollModule } from "ng2-animate-on-scroll";


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'coffee', component: CoffeesComponent},
  {path: 'order', component: OrderComponent},
  {path: 'cpanel', component: CpanelComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'adminorders', component: AdminOrdersComponent},
  {path: 'messages', component: MessagesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CoffeesComponent,
    OrderComponent,
    AdminComponent,
    CpanelComponent,
    AdminOrdersComponent,
    AdminNavComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FlashMessagesModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AnimateOnScrollModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    DropdownModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBZzbj0BjH1sULMtFI6mYEya-6Y-wotS7c'})
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [GoogleMapsAPIWrapper, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
