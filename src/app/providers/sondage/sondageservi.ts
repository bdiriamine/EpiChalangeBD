import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";

/*
  Generated class for the MessageServProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Sondageservi {
    private _db:AngularFireDatabase;
    sd: Observable<any[]>;
  constructor(public http: HttpClient,private db:AngularFireDatabase) {
      this._db = db;
  }
    getAllSondage():Observable<any[]>{
        return this._db.list('sondage').snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });
    }
    envoyerSonD(contenu:string){
        this._db.list('sondage').push({
            
         
            'vote': contenu
        });
    }
    updateItem(key: string, newText: string) {
      //this.itemsRef.update(key, { text: newText });
      }
    
}