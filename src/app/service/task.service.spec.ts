import { TestBed } from '@angular/core/testing';
import { Task } from '../model/task.model';
import { TaskService } from "./task.service";


describe('TaskService', () => {
    let service: TaskService;
  beforeEach(() => {
    service = TestBed.get(TaskService);   
    service.taskList = [];       
    localStorage.clear();
  });
    
  it('should be created', () => {
      expect(service).toBeTruthy();
  });

  it('method: getTaskList()', () => {
      const taskList: Task[] = [];
      expect(service.getTaskList()).toEqual(taskList);
  });

  it('method: createTask()', () => {
    const task: Task = new Task(0, 'To Do');
    service.createTask(task);
    expect(service.taskList).toEqual([task]);
  });
  
  it('method: editTask()', () => {
    const task: Task = new Task(1, 'To Do');
    service.taskList.push(task);
    
    task.name = "In-Progress";
    service.editTask(task);
    expect(service.taskList).toEqual([task]);
  });

  it('method: deleteTask()', () => {
    const task: Task = new Task(1, 'To Do');
    service.taskList.push(task);
    
    service.deleteTask(1);
    expect(service.taskList).toEqual([]);
  });
  
});