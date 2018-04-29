import { NgModule } from '@angular/core';
import { FormEvennementComponent } from './form-evennement/form-evennement';
import {IonicModule} from "ionic-angular";
import { AfficherEventsComponent } from './afficher-events/afficher-events';
@NgModule({
	declarations: [
    FormEvennementComponent,
    AfficherEventsComponent],
	imports: [IonicModule],
	exports: [
    FormEvennementComponent,
    AfficherEventsComponent]
})
export class ComponentsModule {}
