import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { SellComponent } from './sell/sell.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  { path:'', redirectTo: 'login', pathMatch: 'full' },
  { path:'login',component:LoginComponent },
  { path:'register',component:RegisterComponent },
  { path:'home',component:HomeComponent },
  { path:"sell", component:SellComponent},
  { path:"display", component:DisplayComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
