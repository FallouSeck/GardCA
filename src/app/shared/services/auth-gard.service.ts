import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGardService{

  constructor(private route: Router){}

  signIn(signInForm){
    const email = signInForm.email;
    const password = signInForm.password;
    this.isLoggedIn(email, password);
  }

  isLoggedIn(email, password){
    if(email==="fadel" && password==="123"){
      this.route.navigate(['/connexion']);
      console.log('dieuredieuf THIOUNE');
      return true;
    }else{ 
      console.log('recommence !');
      return false;
    };
  }

}
