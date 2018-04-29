import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DonsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DonsProvider {

  private baseUrl = 'https://epichallange-82c39.firebaseio.com/';

  constructor(public http: HttpClient) {
    console.log('Hello DonsProvider Provider');
  }

  getDons() {
    return this.http.get(this.baseUrl + 'factures.json').map(data => {
      return data;
    })
  }

}
