import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    private loginService: LoginService
  ) { }

  canActivate(): Observable<boolean> {
    return this.loginService.isAuthenticated();
  }
}