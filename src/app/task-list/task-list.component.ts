import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { TASKS } from '../task-mock';
import { Task } from '../task';
import { TaskDetailsComponent } from '../task-details/task-details.component';
import { TaskListItemComponent } from '../task-list-item/task-list-item.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor, TaskDetailsComponent, TaskListItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit{
  taskList:Task[] = [...TASKS];
  toDoList:Task[] = [];
  doneList:Task[] = [];

  selectedTask:Task;
  
  ngOnInit(): void {
    this.orderList(this.taskList);
  }

  //events
  onChange(task: Task): void {
    task.completed = !task.completed;
    this.selectedTask = task;
    this.orderList(this.taskList);
  }

  toComplete(task:Task): void {
    this.onChange(task);
  }

  toDelete(toDelete:Task): void {
    this.taskList.splice(this.taskList.findIndex((task) => toDelete.id == task.id),1);
    this.orderList(this.taskList);
    toDelete.id = 0;
    console.log(this.taskList);
  }

  // aux functions
  orderList(taskList:Task[]):void {
    this.toDoList = [];
    this.doneList = [];
    taskList.forEach(task => {
      task.completed ? this.doneList.push(task) : this.toDoList.push(task);
    });
  }



}
