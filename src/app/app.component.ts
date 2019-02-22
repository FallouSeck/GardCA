import { Component } from '@angular/core';
import { AuthGuard } from './app.auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthGuard] // ça ne sert à rien  tu l'as deja declarer dans le module cest soit l'un soit l'autre
})
export class AppComponent {
  title = 'connexion';

  constructor(){ }
}
