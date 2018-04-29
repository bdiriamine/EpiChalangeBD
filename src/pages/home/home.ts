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
import { InsertPage } from '../insert/insert';
import { Userr } from '../User';
import { Infos } from '../../Classes/Infos';
import { ActualiteProvider } from '../../app/providers/actualite/actualite';
import { ActuDetailPage } from '../actu-detail/actu-detail';
import { FacturePage } from '../facture/facture';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public user:Userr = new Userr();
  getinfo:Infos= new Infos();
  @ViewChild(Nav) nav:Nav;
  emailgooogle:string;
  actus: any[];
  password:string;
  username : string;
  constructor( private authf :AngularFireAuth,public navCtrl: NavController, 
    public navParams: NavParams,
    public app: App,db: AngularFireDatabase,
    private toastCtrl: ToastController,public menuCtrl: MenuController, private actuApi: ActualiteProvider) {
    this.getinfo.displayName = this.navParams.get('name');
    this.getinfo.email = this.navParams.get('email');

    this.getinfo.photoURL = this.navParams.get('photoURL');
    this.getinfo.logedin = this.navParams.get('bolez');
    this.emailgooogle = this.navParams.get('email');
    this.password  =this.navParams.get('password');
    this.username= this.navParams.get('user');
    this.user.displayName = this.getinfo.displayName;
    this.user.email = this.getinfo.email;
    this.user.photoURL = this.getinfo.photoURL;
    console.log(this.getinfo.displayName);
    console.log(this.user.displayName);
  
  }
  logout(){
    // Remove API token 
    this.app.getRootNav().setRoot(WelcomePage);
    
}
ionViewDidLoad() {
  this.actuApi.getActus().subscribe(result => {
    this.actus = result;
  })
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
  this.navCtrl.push(EvenementPage,{user:this.user});
}
gotoSondagePage(){
  this.navCtrl.push(SondagePage);
}
gotoQuestionnairePage(){
  this.navCtrl.push(QuestionnairePage);
}
actusTapped($event: Event, item: any) {
  this.navCtrl.push(ActuDetailPage, item);
}

goToPayment() {
  this.navCtrl.push(FacturePage);
}

}
