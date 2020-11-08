import { Injectable } from "@angular/core";
import { Card } from "../model/card.model";
import { TaskService } from "./task.service";

@Injectable({
  providedIn: "root",
})
export class CardService {
  private autoCardId: number = 0;

  constructor(private taskService: TaskService) {}

  updateCard(card: Card, taskIndx: number) {
    let cardIndx = this.taskService.taskList[taskIndx].cards.findIndex(c => c.id === card.id);
    this.taskService.taskList[taskIndx].cards.splice(cardIndx, 1, card);
  }

  deleteCard(cardId: number) {
    this.taskService.taskList.filter(f=> {
      let cardIndx = f.cards.findIndex(c => c.id === cardId);
      f.cards.splice(cardIndx, 1);
    });
  }
  
  createCard(card: Card, taskIndx: number) {
    card.id = ++this.autoCardId;
    this.taskService.taskList[taskIndx].cards.push(card);
  }
}
