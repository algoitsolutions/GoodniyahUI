import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SpinnerComponent } from './spinner/spinner.component';
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
import { NgSelectModule } from '@ng-select/ng-select';
import { FooterComponent } from './footer/footer.component';
import { EditOrgComponent } from './edit-org/edit-org.component';
import { AddstoryComponent } from './addstory/addstory.component';
import { EditstoryComponent } from './editstory/editstory.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { Signuppage1Component } from './signuppage1/signuppage1.component';
import { Signuppage2Component } from './signuppage2/signuppage2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SpinnerComponent,
    LoginpageComponent,
    OtpComponent,
    SearchComponent,
    RegsubComponent,
    ContactComponent,
    DonorSignupComponent,
    StorydetailComponent,
    RegstoryComponent,
    BankdetailsComponent,
    CountrydetailsComponent,
    FooterComponent,
    EditOrgComponent,
    AddstoryComponent,
    EditstoryComponent,
    HeaderComponent,
    SignupComponent,
    Signuppage1Component,
    Signuppage2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
