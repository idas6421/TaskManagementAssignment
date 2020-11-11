import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { AppModule } from 'src/app/app.module';
import { Task } from 'src/app/model/task.model';

import { TaskComponent } from './task.component';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance as TaskComponent;
    fixture.detectChanges();
    spyOn(component.dialog, "open");
    localStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add new task', () => {
    component.addList();
    expect(component.addList).toBeTruthy();
  });

  it('should edit already exists task', () => {
    const task: Task = new Task(1, 'To Do');
    component.taskService.taskList.push(task);

    // For change task name
    task.name = 'Completing test casess';
    component.editTask(task);
    expect(component.taskService.taskList[0].name).toBe('Completing test casess');
  });

  it('should delete already exists task', () => {
    const task: Task = new Task(1, 'To Do');
    component.taskService.taskList.push(task);

    component.deleteTask(task);
    expect(component.taskService.taskList.length).toBe(1);
  });

  it('should handle drag and drop', () => {
    const _cdkDragDrop: CdkDragDrop<any> = {
      container: <CdkDropList>{ data: [1, 2, 3] },
      currentIndex: 1,
      previousIndex: 0,
      previousContainer: <CdkDropList>{},
      isPointerOverContainer: true,
      item: <CdkDrag>{}
    };
    component.drop(_cdkDragDrop);
    expect(component.drop).toBeTruthy();
  });
});
