import {Component, EventEmitter, Input} from '@angular/core';
import {Evennement} from "../../Classes/Evennement";
import {Userr} from "../../pages/User";

/**
 * Generated class for the AfficherEventsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'afficher-events',
  templateUrl: 'afficher-events.html'
})
export class AfficherEventsComponent {

    @Input() public evennements: Evennement[];
    @Input() public user : Userr;
  constructor() {
    console.log(this.evennements.length);
  }

}
