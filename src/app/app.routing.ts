import { Route, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './app.auth.guard';

const APP_ROUTE: Route [] = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'session', canLoad: [AuthGuard], loadChildren: './active-session/session.module#SessionModule'},
    { path: '**', redirectTo:'/' }
];

export const AppRouting = RouterModule.forRoot(APP_ROUTE);