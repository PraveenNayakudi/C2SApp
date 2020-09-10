import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router'
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { take,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService:AuthService, private router:Router ) { }
  canActivate(
    route:ActivatedRouteSnapshot,  
    router:RouterStateSnapshot
    ):boolean
    | UrlTree 
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
    return this.authService.user.pipe(
      take(1),
      map(user=>{
      const isAuth = !!user;
      if(isAuth){
        return true;
      }
      console.log('no user at guard')
      return this.router.createUrlTree(['/auth'])
    }))
  }
}
