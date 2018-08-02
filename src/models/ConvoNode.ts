export class ConvoNode {
  public static Types = {BLOCK:"BLOCK", INPUT:"INPUT", EVENT:"EVENT"};

  public id:string;
  public nodeType:string;
  public data:string;
  public next:string;
  public flags:string[];

  constructor(data:any){
    this.id = data.id;
    this.nodeType = data.nodeType;
    this.data = data.data;
    this.next = data.next;
    if (data.flags) this.flags = data.flags;
    else this.flags = [];
  }
}
