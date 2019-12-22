import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';
import decode from 'jwt-decode';
import { UserServiceService } from './user-service.service';
@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router,private user:UserServiceService) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
   //Capturamos el rol esperado desde datos en el modulo de rutas
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('token');
    //Hacemos las comprobaciones del rol:
    let userrol;
    let auth:boolean = false;
    let datos
    this.user.obtenerUsuario().subscribe((data)=>{
     datos = data;
     userrol = datos.rol;
     if (
      !this.auth.isAuthenticated() || 
      userrol.role !== expectedRole
    ) {
      this.router.navigate(['login']);
      auth = false;
    }
    auth = true;
  },(error)=> console.log('Ha ocurrido un error al autentificar'));
  return auth;
  }
}