import { AdalService } from 'adal-angular4';

import { Injectable } from "@angular/core";
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";


@Injectable()
export class AuthenticationGuard implements CanActivate, CanActivateChild{
    constructor(
        private router: Router,
        private adalSvc: AdalService
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(this.adalSvc.userInfo.authenticated){
            return true;
        }else {
            this.router.navigate(['/login'], { queryParams: {returnUrl: state.url  }});
            return false;
        }
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(childRoute,state);
    }
}