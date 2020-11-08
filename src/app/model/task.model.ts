import { Card } from './card.model';

export class Task {
    public id: number;
    public name: string;
    public cards: Card[];
    constructor(private _id: number, private _name: string) {
        this.id = _id;
        this.name = _name;
        this.cards = [];
    }
}