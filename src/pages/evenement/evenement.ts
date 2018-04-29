import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InsertPage } from '../insert/insert';
import { Userr } from '../User';
import { EventProvider } from '../../providers/event/event';
import { Evennement } from '../../Classes/Evennement';

/**
 * Generated class for the EvenementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-evenement',
  templateUrl: 'evenement.html',
})
export class EvenementPage {
  public user:Userr = new Userr();
  private _db:EventProvider;
  public evenements:Evennement[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private _dbs:EventProvider) {
    this._db = _dbs;
      this._db.getAllEvents().subscribe(evennemnts => {this.evenements = evennemnts});
      this.user = this.navParams.get('user')

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EvenementPage');
  }
  goToPage(){
    console.log(this.user.displayName);
    this.navCtrl.push(InsertPage,{user:this.user});
  }
}
