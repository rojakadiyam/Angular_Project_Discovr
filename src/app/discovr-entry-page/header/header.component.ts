import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  subcontent:string ='';
  headername:string='';
  
  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
      let element = document.querySelector('.add_bg') as HTMLElement;
      if (window.pageYOffset > element.clientHeight) {
        element.classList.add('navbar-inverse');
      } else {
        element.classList.remove('navbar-inverse');
      }
    }
  
    Login(){
      // this.hoemecontent = false;
      this.router.navigate(['/login']);
     
    }
}
