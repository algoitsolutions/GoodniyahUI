import { Component } from '@angular/core';

@Component({
  selector: 'app-countrydetails',
  templateUrl: './countrydetails.component.html',
  styleUrls: ['./countrydetails.component.css']
})
export class CountrydetailsComponent {

  isClicked = false;

  toggleButton() {
    this.isClicked = !this.isClicked;
    
    // You can also pass a value here when the button is clicked or unclicked
    const value = this.isClicked ? 'Clicked' : 'Unclicked';
    // Do something with the value, for example, emit it using an event or pass it to a service.
    console.log(value);
  }



}
