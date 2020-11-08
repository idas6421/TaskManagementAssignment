export class Card {
  public id: number;
  public name: string;
  constructor(private _id: number,private _name: string) {
    this.id = _id;
    this.name = _name;
  }
}
