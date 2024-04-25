import { Component, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { EventEmitter } from 'stream';
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
  @Input() editing: boolean;
  @Output() complete = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() closeForm = new EventEmitter();
  @Output() saveTask = new EventEmitter();

}
