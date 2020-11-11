import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Card } from 'src/app/model/card.model';
import { TaskService } from 'src/app/service/task.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input('data') cards: Card[];
  @Input('taskIndex') taskIndx: number;
  connectedList: string[] = [];

  constructor(
    public taskService: TaskService, 
    public dialog: MatDialog
  ) { 
    this.connectedList = this.taskService.taskList.map(m=> { return `taskId${m.id}` });
  }

  addCard() {
    this.dialog.open(DialogComponent, {
      width: '350px',
      data: {title: 'Add Card', type: 'card', operation: 'add', taskIndx: this.taskIndx}
    });
  }

  editCard(card: Card) {
    this.dialog.open(DialogComponent, {
      width: '350px',
      data: {title: 'Edit Card', type: 'card', operation: 'edit', d: card, taskIndx: this.taskIndx}
    });
  }

  deleteCard(card: Card) {
    this.dialog.open(DialogComponent, {
      width: '350px',
      data: {title: 'Delete Card', type: 'card', operation: 'delete', d: card, message: 'Are you sure you want to delete this item?'}
    });
  }

  drop(event: CdkDragDrop<[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);      
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    this.taskService.updatePosition();
  }
}
