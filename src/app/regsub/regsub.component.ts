import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regsub',
  templateUrl: './regsub.component.html',
  styleUrls: ['./regsub.component.css']
})
export class RegsubComponent {


  constructor(private router:Router)
  {
    
  }

  charity()
  {
    this.router.navigateByUrl('/signup1');
  }
}
