import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
  { path: 'Home', component: BodyComponent},
  {path: 'SignIn', component: SigninComponent},
  {path: '', redirectTo: '/Home',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
