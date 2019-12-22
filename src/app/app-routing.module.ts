import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './Components/body/body.component';
import { SigninComponent } from './Components/signin/signin.component';
import { LoginComponent } from './Components/login/login.component';
import { HeaderComponent } from './Components/header/header.component';
import { UserComponent } from './Components/user/user.component';
import { NoticiaComponent } from './Components/noticia/noticia.component';
import { ListanoticiasComponent } from './Components/listanoticias/listanoticias.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { ForoCategoriasComponent } from './Components/foro-categorias/foro-categorias.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { IsloggedService } from './Services/islogged.service';


const routes: Routes = [
  { path: 'Home', component: BodyComponent
},
  {path: 'SignIn', component: SigninComponent, canActivate:[IsloggedService]
},
  {path:'LogIn',component:LoginComponent, canActivate:[IsloggedService]
},
  {path:'User',component:UserComponent,canActivate:[AuthGuardService]
},
  {path:'Noticias/:id',component:NoticiaComponent
},
  {path:'ListaNoticias',component:ListanoticiasComponent
},
  {path:'Settings',component:SettingsComponent,canActivate:[AuthGuardService]
},
{path:'ForoCategorias',component:ForoCategoriasComponent
},
  {path: '', redirectTo: '/Home',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
