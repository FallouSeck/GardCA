import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthGardService } from './shared/services/auth-gard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthGardService, private router: Router) { }

  canActivateOld(): boolean {
    /**
     * cette ligne renverra une erreur
     * tu appelle la fonction  signIn('password') du service auth => de soucis
     * par contre elle s'attend à avoir un objet en parametre et la tu lui donne un string 'email' => ça merde
     */
    const email = this.auth.signIn('email');
    /**
     * cette ligne renverra une erreur
     * tu appelle la fonction  signIn('password') du service auth => de soucis
     * par contre elle s'attend à avoir un objet en parametre et la tu lui donne un string 'password' => ça merde
     */
    console.log('TCL: AuthGuard -> constructor -> email', email);

    /**
     * cette ligne renverra une erreur
     * tu appelle la fonction  signIn('password') du service auth => de soucis
     * par contre elle s'attend à avoir un objet en parametre et la tu lui donne un string 'passeword' => ça merde
     */
    const password = this.auth.signIn('password');
    console.log('TCL: AuthGuard -> constructor -> password', password);
    return false;
    // if(this.auth.isLoggedIn(email, password)){
    //   console.log('encore une fois');
    //   this.router.navigate(['/']);
    //   return false;
    // } else {
    //   console.log('bravo');
    //   this.router.navigate(['/connexion']);
    //   return true;
    // };
  }

  canActivate(): boolean {
    const isLoggedIn = this.auth.checkIfLoggedIn();
    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
