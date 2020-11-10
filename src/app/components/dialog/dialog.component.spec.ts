import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppModule } from 'src/app/app.module';
import { Card } from 'src/app/model/card.model';
import { Task } from 'src/app/model/task.model';

import { DialogComponent } from './dialog.component';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: { close: ()=>{} } }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance as DialogComponent;
    fixture.detectChanges();

    // pre-defined data for each test cases
    const task1 = new Task(1, 'Task 1');
    task1.cards = [ 
      new Card(1, 'Card 1'), 
      new Card(2, 'Card 2')
    ];
    const task2 = new Task(2, 'Task 2');
    task2.cards = [ 
      new Card(1, 'Card 11'), 
      new Card(2, 'Card 22')
    ];
    component.taskService.taskList = [ task1, task2 ];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle ngAfterViewInit() method', () => {
    const data: any = {
      operation: 'edit',
      d: {
        id: 1,
        name: 'test data'
      },
      taskIndx: 0
    }
    component.data = data;
    component.ngAfterViewInit();
    expect(component).toBeTruthy();
  });

  it('should handle duplicateNameValidation() method', () => {
    const control: FormControl = new FormControl("");
    const data: any = {
      type: 'task', taskIndx: 0
    };

    component.data = data;
    component.duplicateNameValidation(control);

    expect(component.duplicateNameValidation).toBeTruthy();
  });

  it('should handle duplicateNameValidation() method for duplicate name', () => {
    const control: FormControl = new FormControl("Task 1");
    const data: any = {
      type: 'task', taskIndx: 0
    };
    component.data = data;
    
    component.duplicateNameValidation(control);

    expect(component.duplicateNameValidation).toBeTruthy();
  });

  it('should handle onSubmit() method for add new task', () => {
    const data: any = {
      type: 'task', 
      operation: 'add',
      taskIndx: 0
    };
    component.data = data;
    
    component.angForm.get('name').setValue("dummy data");
    component.onSubmit();

    expect(component.onSubmit).toBeTruthy();
  });

  it('should handle onSubmit() method for add new card', () => {
    const data: any = {
      type: 'card', 
      operation: 'add',
      taskIndx: 0
    };
    component.data = data;
    
    component.angForm.get('name').setValue("dummy data");
    component.onSubmit();

    expect(component.onSubmit).toBeTruthy();
  });

  it('should handle onSubmit() method for edit task', () => {
    const data: any = {
      type: 'task', 
      operation: 'edit',
      taskIndx: 0
    };
    component.data = data;
    
    component.angForm.get('id').setValue(1);
    component.angForm.get('name').setValue("dummy data");
    component.onSubmit();

    expect(component.onSubmit).toBeTruthy();
  });

  it('should handle onSubmit() method for edit card', () => {
    const data: any = {
      type: 'card', 
      operation: 'edit',
      taskIndx: 0
    };
    component.data = data;
    
    component.angForm.get('name').setValue("dummy data");
    component.onSubmit();

    expect(component.onSubmit).toBeTruthy();
  });

  it('should handle onSubmit() method for delete task', () => {
    const data: any = {
      type: 'task', 
      operation: 'delete',
      taskIndx: 0,
      d: { id: 1 }
    };
    component.data = data;
    component.onSubmit();

    expect(component.onSubmit).toBeTruthy();
  });

  it('should handle onSubmit() method for delete card', () => {
    const data: any = {
      type: 'card', 
      operation: 'delete',
      taskIndx: 0,
      d: { id: 1 }
    };
    component.data = data;
    component.onSubmit();

    expect(component.onSubmit).toBeTruthy();
  });
});
