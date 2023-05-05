import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GuardService } from '../user-services/guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userservice:GuardService,private router:Router){}
  canActivate() : boolean{
    if (!this.userservice.gettoken()){
      this.router.navigateByUrl("/user-login")
  }
  return true
  
  }
  
}