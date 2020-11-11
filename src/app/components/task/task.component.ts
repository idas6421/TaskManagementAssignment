import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/service/task.service';

import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  constructor(
    public taskService: TaskService,
    public  dialog: MatDialog
  ) { }

  addList() {
    this.dialog.open(DialogComponent, {
      width: '350px',
      data: {title: 'Add List', type: 'task', operation: 'add', taskIndx: -1}
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
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    this.taskService.updatePosition();
  }
}
