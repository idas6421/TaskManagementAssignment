import { Injectable } from "@angular/core";
import { Card } from "../model/card.model";
import { TaskService } from "./task.service";

@Injectable({
  providedIn: "root",
})
export class CardService {
  constructor(private taskService: TaskService) {
    const sotredData = localStorage.getItem('taskList');
    taskService.taskList = sotredData && JSON.parse(sotredData) || [];
  }

  updateCard(card: Card, taskIndx: number) {
    let cardIndx = this.taskService.taskList[taskIndx].cards.findIndex(c => c.id === card.id);
    this.taskService.taskList[taskIndx].cards.splice(cardIndx, 1, card);
    localStorage.setItem('taskList', JSON.stringify(this.taskService.taskList));
  }

  deleteCard(cardId: number) {
    this.taskService.taskList.filter(f=> {
      let cardIndx = f.cards.findIndex(c => c.id === cardId);
      cardIndx >= 0 && f.cards.splice(cardIndx, 1);
    });
    localStorage.setItem('taskList', JSON.stringify(this.taskService.taskList));
  }
  
  createCard(card: Card, taskIndx: number) {
    card.id = this.generateAutoTaskId();
    this.taskService.taskList[taskIndx].cards.push(card);
    localStorage.setItem('taskList', JSON.stringify(this.taskService.taskList));
  }

  generateAutoTaskId(): number {
    let maxId = 1;
    this.taskService.taskList.filter(f=> {
        let _cards = Object.assign([], f.cards);
        let topId = _cards.length && _cards.sort((a,b)=> b.id - a.id)[0].id + 1 || 0;

        if(topId> maxId){
          maxId = topId;
        }
    });

    return maxId;
  }
}
