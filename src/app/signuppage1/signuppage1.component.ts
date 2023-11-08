import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signuppage1',
  templateUrl: './signuppage1.component.html',
  styleUrls: ['./signuppage1.component.css']
})
export class Signuppage1Component {

  constructor(private router:Router)
  {
  
  }


  continue()
  {
    this.router.navigateByUrl('/signup2')
  }
}
