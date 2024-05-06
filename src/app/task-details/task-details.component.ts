import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Task } from '../task';
import { TaskCardComponent } from '../task-card/task-card.component';
import { TaskFormComponent } from '../task-form/task-form.component';
import { TaskActionsComponent } from '../task-actions/task-actions.component';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [ NgIf, TaskCardComponent, TaskFormComponent, TaskActionsComponent],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.scss'
})
export class TaskDetailsComponent {
  @Input({required:true}) selectedTask: Task;
  @Input() editing: boolean;

  deleteTask(): void{
    console.log("[TaskDetailsComponent] deleteTask");
  }

  createTask(): void{
    console.log(`[TaskListComponent.ts] createTask()`);
    this.selectedTask = {
      id: -1,
      title: "",
      editing: true
    }
  }
}
