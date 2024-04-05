import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TASKS } from '../task-mock';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
taskList:Task[] = TASKS;


}
