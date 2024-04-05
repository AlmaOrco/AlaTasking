import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { TASKS } from '../task-mock';
import { Task } from '../task';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor, UpperCasePipe, NgIf],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  taskList:Task[] = TASKS;

  selectedTask:Task = {id:0, title: ""};

  onChange(task: Task): void {
    task.completed = !task.completed;
    this.selectedTask = task;
  }

}
