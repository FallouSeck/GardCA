import { Route, RouterModule } from '@angular/router';
import { ActiveSessionComponent } from './active-session.component';

const SESSION_ROUTE: Route [] = [
    { path: '', component: ActiveSessionComponent }
];

export const sessionRouting = RouterModule.forChild(SESSION_ROUTE);