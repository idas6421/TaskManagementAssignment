import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Card } from 'src/app/model/card.model';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('data') cards: Card[];
  @Input('taskIndex') taskIndx: number;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
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

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }
}
