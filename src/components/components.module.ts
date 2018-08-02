import { NgModule } from '@angular/core';
import { ConvoListItemComponent } from './convo-list-item/convo-list-item';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IonicModule} from "ionic-angular";
@NgModule({
	declarations: [ConvoListItemComponent],
	imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  ],
	exports: [ConvoListItemComponent]
})
export class ComponentsModule {}
