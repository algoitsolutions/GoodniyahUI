import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor( private router: Router,) {

  }

  login()
  {
    this.router.navigateByUrl('/login')
  }


  donorreg()
  {
    this.router.navigateByUrl('/donor_signup')
  }


  regsub()
  {
    this.router.navigateByUrl('/regsub');
  }

  search()
  {
    this.router.navigateByUrl('/search');
  }

  contact()
  {
    this.router.navigateByUrl('/contact');
  }

  
}
