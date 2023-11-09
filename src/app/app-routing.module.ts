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
import { BankdetailsComponent } from './bankdetails/bankdetails.component';
import { CountrydetailsComponent } from './countrydetails/countrydetails.component';
import { FooterComponent } from './footer/footer.component';
import { EditOrgComponent } from './edit-org/edit-org.component';
import { AddstoryComponent } from './addstory/addstory.component';
import { EditstoryComponent } from './editstory/editstory.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { Signuppage1Component } from './signuppage1/signuppage1.component';
import { Signuppage2Component } from './signuppage2/signuppage2.component';
import { OrgprofileComponent } from './orgprofile/orgprofile.component';
import { OrganisationdetailsComponent } from './organisationdetails/organisationdetails.component';

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
  },
  {
    path:'bankdetails',
    component:BankdetailsComponent
  },
  {
    path:'countrydetails',
    component:CountrydetailsComponent
  },
  {
    path:'footer',
    component:FooterComponent
  },
  {
    path:'edit_org',
    component:EditOrgComponent
  },
  {
    path:'addstory',
    component:AddstoryComponent
  },
  {
    path:'editstory',
    component:EditstoryComponent
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'signup1',
    component:Signuppage1Component
  },
  {
    path:'signup2',
    component:Signuppage2Component
  },
  {
    path:'orgprofile',
    component:OrgprofileComponent
  },
  {
    path:'organisationdetails',
    component:OrganisationdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
