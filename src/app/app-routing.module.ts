import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigningComponent } from  '././discovr-entry-page/signing/signing.component';
import {HomeComponent} from '././discovr-entry-page/home/home.component' ;
import { LoginComponent } from './discovr-entry-page/login/login.component';
import { CreditCardComponent } from './credit-card-details/credit-card/credit-card.component';
import { ReadMorePageComponent } from './discovr-entry-page/read-more-page/read-more-page.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'signing',
    component: SigningComponent
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path:'credit',
    component:CreditCardComponent
  },
  {
    path:'read-more',
    component:ReadMorePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
