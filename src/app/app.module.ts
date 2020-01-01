import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { BodyComponent } from './Components/body/body.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SigninComponent } from './Components/signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import { UserComponent } from './Components/user/user.component';
import { NoticiaComponent } from './Components/noticia/noticia.component';
import { ListanoticiasComponent } from './Components/listanoticias/listanoticias.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgxEditorModule } from 'ngx-editor';
import { TooltipModule } from 'ngx-bootstrap';
import { SettingsComponent } from './Components/settings/settings.component';
import { ForoCategoriasComponent } from './Components/foro-categorias/foro-categorias.component';
import { AuthService } from './Services/auth.service';
import { AuthGuardService } from './Services/auth-guard.service';
import { RoleGuardService } from './Services/role-guard.service';
import { CrearnoticiaComponent } from './Components/crearnoticia/crearnoticia.component';
import { CrearpostComponent } from './Components/crearpost/crearpost.component';
import { SafePipe } from './Pipes/safe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    SigninComponent,
    LoginComponent,
    UserComponent,
    NoticiaComponent,
    ListanoticiasComponent,
    SettingsComponent,
    ForoCategoriasComponent,
    CrearnoticiaComponent,
    CrearpostComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxEditorModule,
    TooltipModule.forRoot()
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    AuthService,
    AuthGuardService,
    RoleGuardService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
