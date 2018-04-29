import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {Evennement} from "../../Classes/Evennement";
import {Observable} from "rxjs/Observable";
import {Userr} from "../../pages/User";


/*
  Generated class for the EventProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventProvider {
    private _db:AngularFireDatabase;
    events: Observable<Evennement[]>;
  constructor(public http: HttpClient,private db:AngularFireDatabase) {
      this._db = db;
  }
    getAllEvents():Observable<Evennement[]>{
        return this._db.list('events').snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });
    }
    envoyerEvent(user:Userr,evennement:Evennement) {
      console.log(evennement.titre);
        this._db.list('events').push({
            'displayName': user.displayName,
            'email': user.email,
            'photoProfil': user.photoURL,
            'dateDemande': evennement.dateDemande.toLocaleString(),
            'dateProposition': evennement.dateProposition.toLocaleString(),
            'titre': evennement.titre,
            'description': evennement.description
        });
    }

}
