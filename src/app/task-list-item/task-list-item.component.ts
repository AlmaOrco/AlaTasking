import { Component, Input } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-list-item',
  standalone: true,
  imports: [],
  templateUrl: './task-list-item.component.html',
  styleUrl: './task-list-item.component.scss'
})
export class TaskListItemComponent {
  @Input() task:Task;

  onChange(task: Task): void {
  }
}
