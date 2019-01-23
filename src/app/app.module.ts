import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { SplashComponent } from './splash/splash.component';
import { HeaderComponent } from './header/header.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { ApartmentDetailsComponent } from './apartment-details/apartment-details.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './services/auth-service/auth.service';
import { FindAssociatesComponent } from './find-associates/find-associates.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    HeaderComponent,
    UserHomeComponent,
    ApartmentDetailsComponent,
    UserLoginComponent,
    UserSignupComponent,
    FindAssociatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // imports firebase/app needed for everything
    AngularFireDatabaseModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    RouterModule.forRoot([
      {
        path: '',
        component: SplashComponent
      },
      {
        path: 'home',
        component: UserHomeComponent
      },
      {
        path: 'apartment-details',
        component: ApartmentDetailsComponent
      },
      {
        path: 'login',
        component: UserLoginComponent
      },
      {
        path: 'signup',
        component: UserSignupComponent
      },
      {
        path: 'find',
        component: FindAssociatesComponent
      }
    ])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
