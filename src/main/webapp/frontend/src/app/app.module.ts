import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DataServiceService } from './data-service.service';
import { TermsComponent } from './terms/terms.component';
import { SetupAmountComponent } from './setup-amount/setup-amount.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TermsComponent,
    SetupAmountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
