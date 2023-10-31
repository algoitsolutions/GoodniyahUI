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
    StorydetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
