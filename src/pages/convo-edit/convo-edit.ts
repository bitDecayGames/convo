import {Component} from '@angular/core';
import {IonicPage, NavParams} from 'ionic-angular';
import {Convo} from "../../models/Convo";
import {ConvosProvider} from "../../providers/convos/convos";

@IonicPage()
@Component({
  selector: 'page-convo-edit',
  templateUrl: 'convo-edit.html',
})
export class ConvoEditPage {

  public convo:Convo;

  constructor(public navParams: NavParams, public convos:ConvosProvider) {

  }

  ionViewDidLoad() {
    this.convo = this.navParams.get("convo");
    if (!this.convo) throw new Error("Missing convo nav param");
  }

  ionViewCanLeave() {
    console.log("ionViewCanLeave...");
    this.convos.update(this.convo);
  }
}
