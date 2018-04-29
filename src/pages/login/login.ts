import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController  } from 'ionic-angular';
import { User } from '../../app/providers/models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
user = {} as User ;
email:String;
password:string;
  constructor(private authf :AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    
  }
  async login(user:User){
    // Your app login API web service call triggers 
   
   const resultat = this.authf.auth.signInWithEmailAndPassword(user.email,user.password)
   
   this.navCtrl.push(HomePage,{
    email :user.email,
    password : user.password,
    user:user.displayName,
    
  
  });
 }
}

