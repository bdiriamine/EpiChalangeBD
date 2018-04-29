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

import { SondagePage } from '../pages/sondage/sondage';
import { Sondageservi } from './providers/sondage/sondageservi';
import { HttpClientModule } from '@angular/common/http';
import { Camera } from '@ionic-native/camera';
import {Toast} from "@ionic-native/toast";
import {UserAgent} from "@ionic-native/user-agent";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormEvennementComponent} from "../components/form-evennement/form-evennement";
import {ComponentsModule} from "../components/components.module";
import { InsertPage } from '../pages/insert/insert';

import { EvenementPage } from '../pages/evenement/evenement';
import { EventProvider} from '../providers/event/event';
import { ActuDetailPage } from '../pages/actu-detail/actu-detail';
import { FacturePage } from '../pages/facture/facture';
import { PaymentDetailPage } from '../pages/payment-detail/payment-detail';
import { ActualiteProvider } from './providers/actualite/actualite';
import { DonsProvider } from './providers/dons/dons';
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
    ActuDetailPage,
    FacturePage,
    PaymentDetailPage,
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    WelcomePage,
    LoginPage,
    SignupPage, 
    TabsPage,
    InsertPage
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
    InsertPage,
    DeclarationPage,
    QuestionnairePage,
    SondagePage,
    ActuDetailPage,
    FacturePage,
    PaymentDetailPage,
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
    ActualiteProvider,
    DonsProvider,
    Sondageservi,
    {provide: ErrorHandler, useClass: IonicErrorHandler},Camera,EventProvider,
    Toast,
    UserAgent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
