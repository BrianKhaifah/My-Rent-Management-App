import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LandingComponent } from './landing/landing.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MoredetailsComponent } from './moredetails/moredetails.component';
import { AboutdetailsComponent } from './aboutdetails/aboutdetails.component';
import { AboutportfolioComponent } from './aboutportfolio/aboutportfolio.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
<<<<<<< HEAD
import { AccountComponent } from './account/account.component';
=======
import { HttpClientModule } from '@angular/common/http';

>>>>>>> dc3b07011c81687074608e8810196af66fdbe0a9

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LandingComponent,
    PortfolioComponent,
    DetailsComponent,
    AboutComponent,
    HomeComponent,
    MoredetailsComponent,
    AboutdetailsComponent,
    AboutportfolioComponent,
    FooterComponent,
    ContactUSComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
