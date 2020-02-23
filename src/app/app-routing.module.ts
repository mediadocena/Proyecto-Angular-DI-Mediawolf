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
import { RoleGuardService } from './Services/role-guard.service';
import { AuthService } from './Services/auth.service';
import { CrearpostComponent } from './Components/crearpost/crearpost.component';
import { CrearnoticiaComponent } from './Components/crearnoticia/crearnoticia.component';
import { ModificarnoticiaComponent } from './Components/modificarnoticia/modificarnoticia.component';
import { ListaPostsComponent } from './Components/lista-posts/lista-posts.component';
import { PostComponent } from './Components/post/post.component';
import { WrongRouteComponent } from './Components/wrong-route/wrong-route.component';
import { CrearadminComponent } from './Components/crearadmin/crearadmin.component';


export const routes: Routes = [
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
  {path:'ListaNoticias/:categoria',component:ListanoticiasComponent
},
  {path:'Settings',component:SettingsComponent,canActivate:[AuthGuardService]
},
{path:'ForoCategorias',component:ForoCategoriasComponent
},
{path:'CrearNoticia',component:CrearnoticiaComponent,canActivate:[RoleGuardService],data: { 
  expectedRole: 'admin'
} 
},
{path:'CrearPost',component:CrearpostComponent,canActivate:[AuthGuardService]
},
{path:'Post/:id',component:PostComponent
},
{path:'Foro/:categoria',component:ListaPostsComponent
},
{path:'CrearAdmin',component:CrearadminComponent,canActivate:[RoleGuardService],data:{
  expectedRole: 'admin'
}
},
{path:'ModificarNoticia/:id',component:ModificarnoticiaComponent,canActivate:[RoleGuardService],data: { 
  expectedRole: 'admin'
} 
},
  {path: '', redirectTo: '/Home',pathMatch: 'full'},
  {
    path        : '**',
    pathMatch   : 'full',
    component   : WrongRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
