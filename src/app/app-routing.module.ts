import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigningComponent } from  '././discovr-entry-page/signing/signing.component';
import {HomeComponent} from '././discovr-entry-page/home/home.component' ;
const routes: Routes = [
  {
    path: 'signing',
    component: SigningComponent
  },
  {
    path: 'home',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
