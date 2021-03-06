import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { Global } from './Common.Global';


@Injectable()
export class MyAuthGuard implements CanActivate {


    constructor(private _router: Router,
        public _global: Global) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        // if (this._global.token.length != 0) {
        //     return true;
        // }

        if (localStorage.getItem('token') != null) {
            //role admin or member
            let roles = next.data['permittedRoles'] as Array<string>;
            if (roles) {
                if (this._global.roleMatch(roles)) return true;
                else {
                    this._router.navigate(['forbidden']);
                    return false;
                }
            }
            return true;
        }
        else {
            // navigate to login page
            this._router.navigate(['/user/Login']);
            // you can save redirect url so after authing we can move them back to the page they requested
            return false;
        }

    }

}
