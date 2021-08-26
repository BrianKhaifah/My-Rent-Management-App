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
import { AccountComponent } from './account/account.component';
import { HttpClientModule } from '@angular/common/http';
import { PropertyComponent } from './property/property.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';




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
    AccountComponent,
    PropertyComponent,
    PropertyDetailComponent
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
