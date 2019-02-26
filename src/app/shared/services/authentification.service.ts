import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  public isLogged: boolean = false;

  constructor() { }

  signIn(signInForm){
    const email = signInForm.email;
    const password = signInForm.password;
    console.log(email);
    console.log(password);
    this.isLoggedIn(email, password);
  }

  isLoggedIn(email, password){
    if(email === 'fadel' && password === '123'){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  checkIfLoggedIn(){
    return this.isLogged;
  }

}
