import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Card } from 'src/app/model/card.model';
import { Task } from 'src/app/model/task.model';
import { CardService } from 'src/app/service/card.service';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  angForm: FormGroup;
  constructor(
    private taskService: TaskService,
    private cardService: CardService,
    private cdr: ChangeDetectorRef,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    this.angForm = new FormGroup({
      "id": new FormControl(0),
      "name": new FormControl("", [ Validators.required])
    });
  }

  ngAfterViewInit(): void {
    if(this.data.operation === 'edit') {
      this.angForm.get("id").setValue(this.data.d.id);
      this.angForm.get("name").setValue(this.data.d.name);
    }else if(this.data.operation === 'delete') {
      // this.angForm.get("id").setValue(this.data.d.id);
      // this.angForm.get("name").setValue(this.data.d.name);
    }
    this.cdr.detectChanges();
  }

  onSubmit() {
    if(this.data.operation === 'add'){
      if(this.data.type === "task") {
        let task = new Task(0, this.angForm.get('name').value);  
        this.taskService.createTask(task);      
      }else{
        let card = new Card(0, this.angForm.get('name').value);
        this.cardService.createCard(card, this.data.taskIndx);
      }
    }

    if(this.data.operation === 'edit'){
      if(this.data.type === "task") {
        let task = new Task(this.angForm.get('id').value, this.angForm.get('name').value);  
        this.taskService.editTask(task);
      }else{
        let card = new Card(this.angForm.get('id').value, this.angForm.get('name').value);
        this.cardService.updateCard(card, this.data.taskIndx);
      }
    }

    if(this.data.operation === 'delete'){
      if(this.data.type === "task") {
        this.taskService.deleteTask(this.data.d.id);
      }else{
        this.cardService.deleteCard(this.data.d.id);
      }
    }
    
    this.dialogRef.close();
  }
}
