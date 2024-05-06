import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskDetailsComponent } from '../task-details/task-details.component';
import { TaskListItemComponent } from '../task-list-item/task-list-item.component';
import { MatListModule } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { TaskFormComponent } from '../task-form/task-form.component';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor, TaskDetailsComponent, TaskListItemComponent, MatListModule, MatIcon, TaskFormComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
  taskList:Task[];
  toDoList:Task[];
  doneList:Task[];

  selectedTask:Task;
  
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  //events
  onChange(task: Task): void {
    console.log(`[TaskListComponent.ts] onChange(task) - task: ${JSON.stringify(task)}`);
    this.orderList(this.taskList);
  }

  onSelect(task: Task): void {
    console.log(`[TaskListComponent.ts] onSelect(task) - task: ${JSON.stringify(task)}`);
    this.selectedTask = task;
  }

  toComplete(task:Task): void {
    task.completed = !task.completed;
    this.onChange(task);
  }

  toDelete(toDelete:Task): void {
    this.taskList.splice(this.taskList.findIndex((task) => toDelete.id == task.id),1);
    this.orderList(this.taskList);
    toDelete.id = 0;
  }

  createNewTask(task:Task): void {
    console.log(`[TaskListComponent.ts] createNewTask(task) - task: ${JSON.stringify(task)}`);
    //task.id = this.taskList[this.taskList.length-1].id + 1;
    this.taskService.saveTaskToFile(task);
    this.getTasks();
    this.orderList(this.taskList);
  }

  // aux functions
  orderList(taskList:Task[]):void {
    console.log(`[TaskListComponent.ts] orderList(taskList)`);
    this.toDoList = [];
    this.doneList = [];
    taskList.forEach(task => {
      task.completed ? this.doneList.push(task) : this.toDoList.push(task);
    });
  }

  // Service methods
  getTasks(): void {
    console.log(`[TaskListComponent.ts] getTasks()`);
    this.taskService.getTasks().then((tasks: Task[]) => {
      this.taskList = tasks;
      this.orderList(tasks);
    });
  }
}
