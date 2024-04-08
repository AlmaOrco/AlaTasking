import { NgIf, UpperCasePipe } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [UpperCasePipe, NgIf, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.scss'
})
export class TaskDetailsComponent {
  @Input({required:true}) task: Task;
  @Output() complete = new EventEmitter();
  @Output() delete = new EventEmitter();
}
