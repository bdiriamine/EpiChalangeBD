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
  itemsRef: AngularFireList<any>;
  sondages: any[];
   nbr : number=0;
   contenu: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private fbd: AngularFireDatabase,
    private sdd:Sondageservi) {
    
  }

  ionViewDidLoad() {
    this.sdd.getsondages().subscribe(data => {
      console.log(data);
      this.sondages = data;
      console.log(this.sondages);
    })
  }
  /*
  updateItem(key: string, newText: string) {
    this.itemsRef.update(key, { text: newText });
  }
  ajouternadaa(key: string,nada:number){
    nada=nada+1;
    this.itemsRef.update(key, { nadaa: nada});
    
  }*/
  ajouternadaa(key: string,nada:number){
    nada=nada+1;
    this.itemsRef.set(key, { nadaa: nada});
    
  }
}
