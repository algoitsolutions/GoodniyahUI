import { Component } from '@angular/core';

@Component({
  selector: 'app-storydetail',
  templateUrl: './storydetail.component.html',
  styleUrls: ['./storydetail.component.css']
})
export class StorydetailComponent {

  detailsclicked : boolean = true;
  documentsclicked : boolean = false;
  photosclicked : boolean = false;


  toggle = true;
  status = 'Enable'; 

  toggle2 = true;
  status2 = 'Enable'; 


  constructor()
  {

  }

  details()
  {
    this.detailsclicked  = true;
    this.documentsclicked = false;
    this.photosclicked = false;
  }

  documents()
  {

    this.toggle2 = !this.toggle2;
    this.status2 = this.toggle2 ? 'Enable' : 'Disable';

    
    this.detailsclicked = false;
    this.documentsclicked = true;
    this.photosclicked = false;
  }



  photos() 
  {

    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';

    this.detailsclicked = false;
    this.documentsclicked = false;
    this.photosclicked = true;
  }

}
