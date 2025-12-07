import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    private loginService: LoginService
  ) { }

  canActivate(): boolean {
    if (this.loginService.isAuthenticated()) {
      return true;
    }
    else {
      return false;
    }
  }

};
