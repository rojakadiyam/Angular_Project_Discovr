import { Component, OnInit , HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subcontent:string ='';
  headername:string='';
  
  constructor(private router: Router) { }
hoemecontent:boolean=true;
  ngOnInit(): void {
  }
  login() {
    this.router.navigate(['/signing']);
    this.hoemecontent = false;
  }
  currentItems = [{
    headername: 'End To End Payments ',
    subcontent: 'We Accept ALL Payment Modes! ',
    sub:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }];
  
@HostListener('window:scroll', ['$event'])

onWindowScroll() {
    let element = document.querySelector('.add_bg') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }
}
