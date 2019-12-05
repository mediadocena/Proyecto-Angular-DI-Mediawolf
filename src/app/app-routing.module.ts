import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './Components/body/body.component';
import { SigninComponent } from './Components/signin/signin.component';
import { LoginComponent } from './Components/login/login.component';
import { HeaderComponent } from './Components/header/header.component';
import { UserComponent } from './Components/user/user.component';
import { NoticiaComponent } from './Components/noticia/noticia.component';
import { ListanoticiasComponent } from './Components/listanoticias/listanoticias.component';


const routes: Routes = [
  { path: 'Home', component: BodyComponent //canActivate:[AuthGuardService]
},
  {path: 'SignIn', component: SigninComponent//canActivate:[AuthGuardService]
},
  {path:'LogIn',component:LoginComponent
},
  {path:'User',component:UserComponent
},
  {path:'Noticias',component:NoticiaComponent
},
  {path:'ListaNoticias',component:ListanoticiasComponent
},
  {path: '', redirectTo: '/Home',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
