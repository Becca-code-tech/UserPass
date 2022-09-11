import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AdminService } from '../services/admin.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private adminService: AdminService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    //თუ შესულია სისტემაში შეუშვებს;
    if (this.adminService.isLoggedIn()) {
      return true;
    }
    //თუ არა გადაამისამართებს საიტის home page ზე;
    else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
