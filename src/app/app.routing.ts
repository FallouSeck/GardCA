import { Route, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const APP_ROUTE: Route [] = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'session', loadChildren: 'app/active-session/session.module#SessionModule'},
    { path: '**', redirectTo:'/' }
];

export const AppRouting = RouterModule.forRoot(APP_ROUTE);