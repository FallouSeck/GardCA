import { Route, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ActiveSessionComponent } from './active-session/active-session.component';
import { AuthGuard } from './app.auth.guard';

export const APP_ROUTE: Route [] = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'connexion', component: ActiveSessionComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo:'/' }
]

export const AppRouting = RouterModule.forRoot(APP_ROUTE)