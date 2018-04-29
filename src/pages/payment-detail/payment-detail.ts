import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PaymentDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-payment-detail',
  templateUrl: 'payment-detail.html',
})
export class PaymentDetailPage {

  don: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.don = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentDetailPage');
  }

}
