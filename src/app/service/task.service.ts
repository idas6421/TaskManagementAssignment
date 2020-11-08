import { Injectable } from '@angular/core';
import { Task } from '../model/task.model';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private autoTaskId: number = 0;
    taskList: Task[] = [];

    getTaskList(): Task[] {
        return this.taskList;
    }

    createTask(task: Task) {
        task.id = ++this.autoTaskId;
        this.taskList.push(task);
    }

    editTask(task: Task) {
        let indx = this.taskList.findIndex(t => t.id === task.id);
        this.taskList[indx].name = task.name;
    }

    deleteTask(id: number) {
        let indx = this.taskList.findIndex(t => t.id === id);
        this.taskList.splice(indx, 1);
    }
}