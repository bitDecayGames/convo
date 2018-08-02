import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {ConvosProvider} from "../../providers/convos/convos";
import {Convo} from "../../models/Convo";

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

  public refreshGroups(){
    this.groups = this.convos.groups();
    this.groupList = Array.from(this.groups.keys());
  }

  public addNewConvo(){
    this.convos.add(new Convo({
      version: 1,
      id: "New " + new Date().getTime(),
      group: "Group " + (this.convos.length % 3),
      nodes: []
    }));
    this.refreshGroups();
  }
}
