import {ConvoNode} from "./ConvoNode";

export class Convo {
  public version:number;
  public id:string;
  public name:string;
  public nodes:Map<string, ConvoNode>;
  public group:string;

  constructor(data:any){
    if (data.version) this.version = data.version;
    else this.version = 1;
    if (data.id) this.id = data.id;
    else this.id = "" + new Date().getTime();
    this.name = data.name;
    this.nodes = new Map<string, ConvoNode>();
    if (data.nodes) for(let key in data.nodes) if (data.nodes.hasOwnProperty(key)) this.nodes.set(key, new ConvoNode(data.nodes[key]));
    this.group = data.group;
  }
}
