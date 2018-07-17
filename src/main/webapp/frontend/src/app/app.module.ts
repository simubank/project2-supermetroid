import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DataServiceService } from './data-service.service';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './/app-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationComponent } from './notification/notification.component';
import { FormComponent } from './form/form.component';
import { PaymentComponent } from './payment/payment.component';
import { StorageServiceModule} from 'angular-webstorage-service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    NotificationComponent,
    FormComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StorageServiceModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
