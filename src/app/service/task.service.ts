import { Injectable } from '@angular/core';
import { Task } from '../model/task.model';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    taskList: Task[] = [];

    constructor() {
        const sotredData = localStorage.getItem('taskList');
        this.taskList = sotredData && JSON.parse(sotredData) || [];
    }

    getTaskList(): Task[] {
        return this.taskList;
    }

    createTask(task: Task) {
        task.id = this.generateAutoTaskId();
        this.taskList.push(task);
        localStorage.setItem('taskList', JSON.stringify(this.taskList));
    }

    editTask(task: Task) {
        let indx = this.taskList.findIndex(t => t.id === task.id);
        this.taskList[indx].name = task.name;
        localStorage.setItem('taskList', JSON.stringify(this.taskList));
    }

    deleteTask(id: number) {
        let indx = this.taskList.findIndex(t => t.id === id);
        this.taskList.splice(indx, 1);
        localStorage.setItem('taskList', JSON.stringify(this.taskList));
    }

    updatePosition() {
        localStorage.setItem('taskList', JSON.stringify(this.taskList));
    }

    generateAutoTaskId(): number {
        const _taskList = Object.assign([], this.taskList);
        return _taskList.length && _taskList.sort((a,b)=> b.id - a.id)[0].id + 1 || 1;
    }
}