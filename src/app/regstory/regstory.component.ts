import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regstory',
  templateUrl: './regstory.component.html',
  styleUrls: ['./regstory.component.css']
})
export class RegstoryComponent {

  constructor(private router:Router)
  {
    
  }

  continue()
  {
    this.router.navigateByUrl('/bankdetails')
  }
}
