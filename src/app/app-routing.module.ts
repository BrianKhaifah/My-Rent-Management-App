import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { AppComponent  } from './app.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { AccountComponent } from './account/account.component';



const routes: Routes = [

  { path:'about', component: AboutComponent},
  { path: 'home',component: HomeComponent},
  { path: 'contactUS', component: ContactUSComponent},
  { path: 'account', component: AccountComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
