import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {Sondageservi} from '../../app/providers/sondage/sondageservi'
/**
 * Generated class for the SondagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sondage',
  templateUrl: 'sondage.html',
})
export class SondagePage {
  private _db:Sondageservi;
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
   nbr : number=0;
   sond: any[];
   contenu: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,db: AngularFireDatabase,sdd:Sondageservi) {
    this._db=sdd;
    this._db.getAllSondage().subscribe(sand => {
      this.sond =sand   });
    this.itemsRef = db.list('sondage');
    // Use snapshotChanges().map() to store the key
    this.items = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SondagePage');
  }
  updateItem(key: string, newText: string) {
    this.itemsRef.update(key, { text: newText });
  }
  ajouternadaa(){
    
  }

}
