import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGardService {
  isLogged = false;
  constructor(private route: Router) { }


  signIn(signInForm) {
    const email = signInForm.email;
    const password = signInForm.password;
    this.isLoggedIn(email, password);
    if (this.isLoggedIn) {
      this.route.navigate(['/connexion']);
    }
  }

  /***
   * Dans ta version
   * ici il s'agit juste d'un service qui doit si les identifiants sont bon ou pas
   * tu ne dois pas faire de "this.route.navigate([connexion])";
   * En faisant tu fait une boucle in finie je t'expliquerais
   */
  // isLoggedIn(email, password){
  //   if(email==="fadel" && password==="123"){
  //     this.route.navigate(['/connexion']);
  //     console.log('dieuredieuf THIOUNE');
  //     return true;
  //   }else{
  //     console.log('recommence !');
  //     return false;
  //   };
  // }


  // *********************************** ma versions
  isLoggedIn(email, password) {
    if (email === 'fadel' && password === '123') {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  checkIfLoggedIn() {
    return this.isLogged;
  }
}
