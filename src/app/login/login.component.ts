import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthentificationService } from '../shared/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public signInForm: FormGroup;

  constructor(private fb: FormBuilder, private serv: AuthentificationService) { }

  ngOnInit() {
    this.signInForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  trySignin(){
    this.serv.signIn(this.signInForm.value);
  }

}
