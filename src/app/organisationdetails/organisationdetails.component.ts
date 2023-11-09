import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organisationdetails',
  templateUrl: './organisationdetails.component.html',
  styleUrls: ['./organisationdetails.component.css']
})
export class OrganisationdetailsComponent {

  constructor(private router:Router)
  {
    
  }

  addstory()
  {
    this.router.navigateByUrl('/addstory')
  }

  editorg()
  {
    this.router.navigateByUrl('/edit_org');
  }
}
