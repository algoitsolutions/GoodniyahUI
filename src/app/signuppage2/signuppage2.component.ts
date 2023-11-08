import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signuppage2',
  templateUrl: './signuppage2.component.html',
  styleUrls: ['./signuppage2.component.css']
})
export class Signuppage2Component {


  constructor(private router:Router)
  {

  }

  continue()
  {
    this.router.navigateByUrl('/regstory')
  }
}
