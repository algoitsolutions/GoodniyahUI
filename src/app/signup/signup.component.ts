import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private router:Router)
  {

  }


  donorreg()
  {
    this.router.navigateByUrl('/donor_signup')
  }


  regsub()
  {
    this.router.navigateByUrl('/regsub');
  }


}
