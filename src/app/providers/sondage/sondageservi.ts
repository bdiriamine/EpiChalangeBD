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
  constructor(public http: HttpClient,private fdb:AngularFireDatabase) {
  }
  
  getsondages(): Observable<any> {
    return this.http.get("https://epichallange-82c39.firebaseio.com/sondage.json").map(data => {
      return data;
    })
  }
    
}