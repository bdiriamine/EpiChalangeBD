import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Userr} from "../../pages/User";
import {Evennement} from "../../Classes/Evennement";
import {Toast} from "@ionic-native/toast";
import { Platform } from 'ionic-angular';
/**
 * Generated class for the FormEvennementComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'form-evennement',
  templateUrl: 'form-evennement.html'
})
export class FormEvennementComponent {
  @Input() public user:Userr; //input
  evennement: Evennement;
  plateForm:Platform;
  @Output() public pushEvent:EventEmitter<any> = new EventEmitter();
  toast:Toast;
  constructor(private toastt:Toast,public plt: Platform) {
    this.evennement = new Evennement();
    this.toast = toastt;
    this.plateForm = plt;
    console.log("Test Form event");
  }
  public envoiEvent(){
    this.pushEvent.emit(this.evennement);
    this.evennement.titre = "";
    this.evennement.dateProposition =null;
    this.evennement.dateDemande = null;
    this.evennement.description = "";

      if (this.plateForm.is('android')) {
          this.toast.show(`Evennement bien enregistré!`, '5000', 'center').subscribe(
              toast => {
                  console.log(toast);
              }
          );
      }else{
        console.log("tested on android");
      }
  }

}
