import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {ConvosProvider} from "../../providers/convos/convos";
import {Convo} from "../../models/Convo";
import {ConvoEditPage} from "../convo-edit/convo-edit";

@IonicPage()
@Component({
  selector: 'page-convo-list',
  templateUrl: 'convo-list.html',
})
export class ConvoListPage {

  public groups:Map<string, Convo[]> = new Map<string, Convo[]>();
  public groupList:string[] = [];
  constructor(public navCtrl: NavController, public convos:ConvosProvider) {
  }

  ionViewDidLoad() {
    this.refreshGroups();
  }

  ionViewDidEnter(){
    this.refreshGroups();
  }

  public refreshGroups(){
    this.groups = this.convos.groups();
    this.groupList = Array.from(this.groups.keys());
  }

  public addNewConvo(){
    this.convos.add(new Convo({
      version: 1,
      name: "New " + new Date().getTime(),
      group: "Group " + (this.convos.length % 3),
      nodes: []
    }));
    this.refreshGroups();
  }

  public selectConvo(convo:Convo){
    this.navCtrl.push(ConvoEditPage, {convo: convo});
  }

  public deleteConvo(convo:Convo){
    this.convos.remove(convo);
    this.refreshGroups();
  }

  public duplicateConvo(convo:Convo){
    let c = new Convo(convo);
    c.id = "" + new Date().getTime();
    c.name += ` (Copy)`;
    this.convos.add(c);
    this.refreshGroups();
  }
}
