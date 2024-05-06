import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './task.service';
import { Task } from './task';
import { TaskDetailsComponent } from './task-details/task-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskListComponent, HttpClientModule, TaskDetailsComponent],
  providers: [TaskService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  selectedTask: Task;
  title = 'AlaTasking';
}
