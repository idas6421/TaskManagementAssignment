import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from 'src/app/model/card.model';
import { Task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/service/task.service';

import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(
    private taskService: TaskService,
    private  dialog: MatDialog
  ) { }

  ngOnInit() {
    
  }

  addList() {
    this.dialog.open(DialogComponent, {
      width: '350px',
      data: {title: 'Add List', type: 'task', operation: 'add', taskIndx: -1}
    });
  }

  addCard(taskIndx: number) {
    this.dialog.open(DialogComponent, {
      width: '350px',
      data: {title: 'Add Card', type: 'card', operation: 'add', taskIndx: taskIndx}
    });
  }

  editCard(card: Card, taskIndx: number) {
    this.dialog.open(DialogComponent, {
      width: '350px',
      data: {title: 'Edit Card', type: 'card', operation: 'edit', d: card, taskIndx: taskIndx}
    });
  }

  deleteCard(card: Card) {
    this.dialog.open(DialogComponent, {
      width: '350px',
      data: {title: 'Delete Card', type: 'card', operation: 'delete', d: card, message: 'Are you sure you want to delete this item?'}
    });
  }

  editTask(task: Task) {
    this.dialog.open(DialogComponent, {
      width: '350px',
      data: {title: 'Edit Task', type: 'task', operation: 'edit', d: task, taskIndx: -1}
    });
  }

  deleteTask(task: Task) {
    this.dialog.open(DialogComponent, {
      width: '350px',
      data: {title: 'Delete Task', type: 'task', operation: 'delete', d: task, message: 'Are you sure you want to delete this item?'}
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
