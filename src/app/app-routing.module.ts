import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGuardService } from './Services/guard-service';


const routes: Routes = [
  { path: 'Home', component: BodyComponent //canActivate:[AuthGuardService]
},
  {path: 'SignIn', component: SigninComponent//canActivate:[AuthGuardService]
},
  {path: '', redirectTo: '/Home',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
