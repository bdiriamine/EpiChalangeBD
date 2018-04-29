import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage} from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { DeclarationPage } from '../pages/declaration/declaration';
import { QuestionnairePage } from '../pages/questionnaire/questionnaire';
import { EvenementPage } from '../pages/evenement/evenement';
import { SondagePage } from '../pages/sondage/sondage';
import { Sondageservi } from './providers/sondage/sondageservi';
import { HttpClientModule } from '@angular/common/http';
import { Camera } from '@ionic-native/camera';


const config = {
  apiKey: "AIzaSyC7wkz27Lig8JCUEjT4pdaeakMndRcPlSA",
  authDomain: "epichallange-82c39.firebaseapp.com",
  databaseURL: "https://epichallange-82c39.firebaseio.com",
  projectId: "epichallange-82c39",
  storageBucket: "epichallange-82c39.appspot.com",
  messagingSenderId: "124897717102"};

@NgModule({
  declarations: [
    DeclarationPage,
    QuestionnairePage,
    SondagePage,
    EvenementPage,
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    WelcomePage,
    LoginPage,
    SignupPage, 
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DeclarationPage,
    QuestionnairePage,
    SondagePage,
    EvenementPage,
    AboutPage,
    ContactPage,
    HomePage,
    WelcomePage,
    LoginPage,
    SignupPage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Sondageservi,
    {provide: ErrorHandler, useClass: IonicErrorHandler},Camera
  ]
})
export class AppModule {}
