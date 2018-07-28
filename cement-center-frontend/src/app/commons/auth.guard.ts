import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {TOKEN_KEY} from './ApplicationConstant';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    /*if (localStorage.getItem(TOKEN_KEY) != null) {
        return true;
    }
    console.log('CanActivate for url called ');
    this.router.navigateByUrl('/login');*/
    return true;
  }
}
