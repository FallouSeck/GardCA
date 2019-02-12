import { Component } from '@angular/core';
import { AuthGuard } from './app.auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthGuard]
})
export class AppComponent {
  title = 'connexion';

  constructor(){ }
}
