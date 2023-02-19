import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AfterAuthGuard implements CanActivate {
  constructor( private router: Router,private authserv:AuthenticationService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authserv.isAuthenticed()) {
      this.router.navigateByUrl('/admin/patients');
      return false;
    }
    return true;
  }
}
