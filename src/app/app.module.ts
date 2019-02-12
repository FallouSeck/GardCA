// NATIFS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material';

// COMPONENT
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { LoginComponent } from './login/login.component';
import { ActiveSessionComponent } from './active-session/active-session.component';

// SERVICES
import { AuthGardService } from './shared/services/auth-gard.service';
import { AuthGuard } from './app.auth.guard';

// MODULES
import { LayoutModule } from './shared/layout/layout.module';

// ROUTING
import { AppRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TopbarComponent,
    ActiveSessionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    AppRouting
  ],
  providers: [
    AuthGardService,
    AuthGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
