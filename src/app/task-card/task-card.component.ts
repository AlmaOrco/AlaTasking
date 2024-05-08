import { Component, Input } from '@angular/core';
import { Task } from '../task';
import { MatCardModule } from '@angular/material/card';
import { TaskActionsComponent } from '../task-actions/task-actions.component';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [MatCardModule, TaskActionsComponent],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  @Input({required:true}) selectedTask: Task;
  @Input() editing: boolean;

}
