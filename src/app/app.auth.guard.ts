import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthGardService } from './shared/services/auth-gard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthGardService, private router: Router){ }
  
  canActivate(): boolean {
    // const email = this.auth.signIn[this.auth.signIn];
    const email = this.auth.signIn('email');
    const password = this.auth.signIn('password');
    if(this.auth.isLoggedIn(email, password)){
      console.log('encore une fois');
      this.router.navigate(['/']);
      return false;
    } else {
      console.log('bravo');
      this.router.navigate(['/connexion']);
      return true;
    };
  }

}