import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Convo} from "../../models/Convo";
import {ItemSliding} from "ionic-angular";

@Component({
  selector: 'convo-list-item',
  templateUrl: 'convo-list-item.html'
})
export class ConvoListItemComponent {
  @Input() public convo:Convo;
  @Output() public select:EventEmitter<Convo> = new EventEmitter<Convo>();
  @Output() public duplicate:EventEmitter<Convo> = new EventEmitter<Convo>();
  @Output() public delete:EventEmitter<Convo> = new EventEmitter<Convo>();

  @ViewChild("slidingItem") slidingItem:ItemSliding;

  constructor() { }

  public doSelect(){
    this.select.emit(this.convo);
    if (this.slidingItem) this.slidingItem.close();
  }

  public doDuplicate(){
    this.duplicate.emit(this.convo);
    if (this.slidingItem) this.slidingItem.close();
  }

  public doDelete(){
    this.delete.emit(this.convo);
    if (this.slidingItem) this.slidingItem.close();
  }
}
