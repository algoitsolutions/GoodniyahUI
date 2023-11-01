import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { OtpComponent } from './otp/otp.component';
import { SearchComponent } from './search/search.component';
import { RegsubComponent } from './regsub/regsub.component';
import { ContactComponent } from './contact/contact.component';
import { DonorSignupComponent } from './donor-signup/donor-signup.component';
import { StorydetailComponent } from './storydetail/storydetail.component';
import { RegstoryComponent } from './regstory/regstory.component';

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  },
  {
    path:'login',
    component:LoginpageComponent
  },
  {
    path:'otp',
    component:OtpComponent
  },
  {
    path:'search',
    component:SearchComponent
  },
  {
    path:'regsub',
    component:RegsubComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'donor_signup',
    component:DonorSignupComponent
  },
  {
    path:'storydetail',
    component:StorydetailComponent
  },
  {
    path:'regstory',
    component:RegstoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
