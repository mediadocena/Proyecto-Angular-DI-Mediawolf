import { Injectable } from '@angular/core';
import { Router,CanActivate,ActivatedRouteSnapshot} from '@angular/router';
import { AuthService } from './auth.service';
import { UserServiceService } from './user-service.service';
@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router,private user:UserServiceService) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
   //Capturamos el rol esperado desde datos en el modulo de rutas
    const expectedRole = route.data.expectedRole;
    //Hacemos las comprobaciones del rol:
    let userrol = localStorage.getItem('rol');
    let auth:boolean;
    if (!this.auth.isAuthenticated() || userrol != expectedRole) {
      console.log('guard',expectedRole,userrol)
      auth = false;
      this.router.navigate(['Home']);
    }else{
      auth = true;
    }
  console.log(auth)
  return auth;
  }
}