import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthGardService } from '../shared/services/auth-gard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public signInForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthGardService) { }

  ngOnInit() {
    this.signInForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  trySignin() {
    this.auth.signIn(this.signInForm.value);
    // this.signInForm.reset();
  }

}
