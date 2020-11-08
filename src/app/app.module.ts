import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatDialogModule, MatInputModule, MatButtonModule, MatIconModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskComponent } from "./components/task/task.component";
import { CardComponent } from "./components/card/card.component";
import { DialogComponent } from './components/dialog/dialog.component';

import { TaskService } from './service/task.service';
import { CardService } from './service/card.service';

@NgModule({
  declarations: [AppComponent, TaskComponent, CardComponent, DialogComponent],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    ReactiveFormsModule, 
    MatDialogModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule,
    MatIconModule,
    DragDropModule
  ],
  providers: [TaskService, CardService],
  entryComponents:[DialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
