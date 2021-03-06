import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthentificationService } from './shared/services/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private serv: AuthentificationService ){ }

  canActivate(): boolean {
    const isLoggedIn = this.serv.checkIfLoggedIn();
    if(isLoggedIn){
      console.log('yes');
      return true;
    }else{
      console.log('merde');
      this.router.navigate(['/']);
      return false;
    }
  }

}