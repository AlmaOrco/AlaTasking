import { NgIf, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [UpperCasePipe, NgIf],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.scss'
})
export class TaskDetailsComponent {
  @Input({required:true}) task: Task;
}
