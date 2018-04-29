import { Component,ViewChild } from '@angular/core';
import { NavController, App, ToastController, NavParams,Nav } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { WelcomePage } from '../welcome/welcome';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { MenuController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { SondagePage } from '../sondage/sondage';
import { EvenementPage } from '../evenement/evenement';
import { QuestionnairePage } from '../questionnaire/questionnaire';
import { DeclarationPage } from '../declaration/declaration';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  getinfo = {
    displayName :'',
    email :'',
    photoURL :'',
    logedin : false
  };
  @ViewChild(Nav) nav:Nav;
  emailgooogle:string;
  password:string;
  username : string;
  constructor(  private authf :AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,public app: App,db: AngularFireDatabase,private toastCtrl: ToastController,public menuCtrl: MenuController) {
    this.getinfo.displayName = this.navParams.get('name');
    this.getinfo.email = this.navParams.get('email');

    this.getinfo.photoURL = this.navParams.get('photoURL');
    this.getinfo.logedin = this.navParams.get('bolez');
    this.emailgooogle = this.navParams.get('email');
    this.password  =this.navParams.get('password');
    this.username= this.navParams.get('user');
  
  }
  logout(){
    // Remove API token 
    this.app.getRootNav().setRoot(WelcomePage);
    
}
ionViewDidLoad() {
 this.authf.authState.subscribe(data =>{if (data.email) {
  this.toastCtrl.create({
    
    message: '     Bienvenu '+data.email,
    duration: 3000,
    position: 'bot',
  }).present();
  }

 });
  
 
  
}
gotoDeclarationPage(){
 this.navCtrl.push(DeclarationPage);
}
gotoEvenementPage(){
  this.navCtrl.push(EvenementPage);
}
gotoSondagePage(){
  this.navCtrl.push(SondagePage);
}
gotoQuestionnairePage(){
  this.navCtrl.push(QuestionnairePage);
}
}
