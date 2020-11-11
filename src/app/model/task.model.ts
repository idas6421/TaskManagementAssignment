import { Card } from './card.model';

export class Task {
    public id: number;
    public name: string;
    public cards: Card[];
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.cards = [];
    }
}