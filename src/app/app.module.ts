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
import { ToastrModule } from 'ngx-toastr';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    SigningComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule,ReactiveFormsModule,ToastrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
