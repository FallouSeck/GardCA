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

// SERVICES
import { AuthGuard } from './app.auth.guard';
import { AuthentificationService } from './shared/services/authentification.service';

// MODULES
import { LayoutModule } from './shared/layout/layout.module';

// ROUTING
import { AppRouting } from './app.routing';
import { sessionRouting } from './active-session/session.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    AppRouting,
    sessionRouting
  ],
  providers: [
    AuthGuard,
    AuthentificationService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }