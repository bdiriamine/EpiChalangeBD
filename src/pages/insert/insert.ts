import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Evennement} from "../../Classes/Evennement";
import {Userr} from "../User";
import {EventProvider} from "../../providers/event/event";
/**
 * Generated class for the InsertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-insert',
  templateUrl: 'insert.html',
})
export class InsertPage {
    public user:Userr = new Userr();
    private _db:EventProvider;
  constructor(public navCtrl: NavController, public navParams: NavParams,private _dbs:EventProvider) {
    this._db = _dbs;
    this.user = this.navParams.get('user');
    console.log("PAGE INSERER");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsertPage');
  }
    doSend(evennement:Evennement){
     
        this._db.envoyerEvent(this.user,evennement);
    }

}
