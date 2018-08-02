import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import {Convo} from "../../models/Convo";

@Injectable()
export class ConvosProvider {

  private list:Convo[] = [];
  private byId:Map<string, Convo> = new Map<string, Convo>();
  private grouped:Map<string, Convo[]> = new Map<string, Convo[]>();

  constructor(public storage:Storage) {
    this.retrieveFromStorage();
  }
  private retrieveFromStorage():Promise<any>{
    this.list = [];
    this.byId = new Map<string, Convo>();
    this.grouped = new Map<string, Convo[]>();
    return this.storage.get("convo-list").then(list => Promise.all(list.map(id => this.storage.get(id)))).then(dataList => dataList.map(data => new Convo(data))).then(convoList => {
      convoList.forEach(convo => {
        this.add(convo);
      });
    }).catch(err => {
      console.error(err);
    });
  }

  public add(convo:Convo){
    this.list.push(convo);
    this.byId.set(convo.id, convo);
    let group:Convo[] = [];
    if (this.grouped.has(convo.group)) group = this.grouped.get(convo.group);
    group.push(convo);
    this.grouped.set(convo.group, group);
  }

  public update(convo:Convo){
    this.byId.forEach((value, key, map) => {
      if (value.id === convo.id) {
        map.delete(key);
        map.set(convo.id, convo);
      }
    });
    this.grouped.forEach((value, key, map) => {
      let index = value.findIndex(c => c.id === convo.id && key !== convo.group);
      if (index >= 0){
        value.splice(index, 1);
        map.set(key, value);
        let group:Convo[] = [];
        if (map.has(convo.group)) group = map.get(convo.group);
        group.push(convo);
        this.grouped.set(convo.group, group);
      }
    });
  }

  public remove(convo:Convo){
    let index = this.list.findIndex(c => c.id === convo.id);
    if (index >= 0) this.list.splice(index, 1);

    this.grouped.forEach((value, key, map) => {
      let index = value.findIndex(c => c.id === convo.id);
      if (index >= 0) value.splice(index, 1);
    });

    if (this.byId.has(convo.id)) this.byId.delete(convo.id);
  }

  public count():number {
    return this.list.length;
  }

  get length():number {
    return this.list.length;
  }

  public get(id:string):Convo|undefined{
    return this.byId.get(id);
  }

  public all():Convo[] {
    let all:Convo[] = [];
    this.list.forEach(c => all.push(c));
    return all;
  }

  public group(groupName:string):Convo[] {
    if (this.grouped.has(groupName)) return this.grouped.get(groupName);
    else return [];
  }

  public groups():Map<string, Convo[]> {
    let g = new Map<string, Convo[]>();
    this.grouped.forEach((value, key, map) => {
      let v:Convo[] = [];
      value.forEach(c => v.push(c));
      g.set(key, v);
    });
    return g;
  }
}
