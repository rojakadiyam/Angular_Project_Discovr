import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './discovr-entry-page/home/home.component';
import { FooterComponent } from './discovr-entry-page/footer/footer.component';
import { SigningComponent } from './discovr-entry-page/signing/signing.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './discovr-entry-page/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreditCardComponent } from './credit-card-details/credit-card/credit-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './discovr-entry-page/header/header.component';
import { ReadMorePageComponent } from './discovr-entry-page/read-more-page/read-more-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    SigningComponent,
    LoginComponent,
    CreditCardComponent,
    HeaderComponent,
    ReadMorePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule,ReactiveFormsModule, ToastrModule.forRoot({ }),BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
