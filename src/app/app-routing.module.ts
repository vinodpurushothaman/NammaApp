import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { NewsComponent } from './news/news.component';
import { MusicComponent } from './music/music.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'landing',component:LandingComponent},
  {path:'news',component:NewsComponent},
  {path:'music',component:MusicComponent},
  {path:'user-profile',component:UserProfileComponent},
  {path:'register-user',component:RegisterUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
