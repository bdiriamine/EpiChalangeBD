import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PaymentDetailPage} from "../payment-detail/payment-detail";
import { DonsProvider } from '../../app/providers/dons/dons';

/**
 * Generated class for the FacturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-facture',
  templateUrl: 'facture.html',
})
export class FacturePage {

  dons: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private donsApi: DonsProvider) {
  }

  ionViewDidLoad() {
    this.donsApi.getDons().subscribe(result => {
      this.dons = result;
    })
  }

  donTapped($event: Event, item){
    this.navCtrl.push(PaymentDetailPage, item);
  }
}
