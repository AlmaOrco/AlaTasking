import { Component, Input } from '@angular/core';
import { Task } from '../task';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { TaskActionsComponent } from '../task-actions/task-actions.component';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, TaskActionsComponent],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {
  @Input() selectedTask:Task;

}
