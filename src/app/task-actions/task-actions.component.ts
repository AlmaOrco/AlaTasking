import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Task } from '../task';

@Component({
  selector: 'app-task-actions',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './task-actions.component.html',
  styleUrl: './task-actions.component.scss'
})
export class TaskActionsComponent {
  @Input() selectedTask: Task;
  @Output() completeTask = new EventEmitter();
  @Output() deleteTask = new EventEmitter();
  @Output() editTask = new EventEmitter();
  @Output() closeForm = new EventEmitter();
  @Output() saveTask = new EventEmitter();
  @Output() createTask = new EventEmitter();

  log(text:string) {
    console.log(`TaskActionsComponent - log: ${text}`)
  }


/*   createTask(): void{
    console.log(`[TaskListComponent.ts] createTask()`);
    this.selectedTask = {
      id: -1,
      title: ""
    }
  } */
}
