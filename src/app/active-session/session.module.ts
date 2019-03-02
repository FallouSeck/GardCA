import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { sessionRouting } from './session.routing';
import { ActiveSessionComponent } from './active-session.component';

@NgModule({
    imports:[
        CommonModule,
        RouterModule,
        sessionRouting
    ],
    declarations:[
        ActiveSessionComponent
    ]
})
export class SessionModule { }