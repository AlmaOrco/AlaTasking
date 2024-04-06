import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { TASKS } from '../task-mock';
import { Task } from '../task';
import { TaskDetailsComponent } from '../task-details/task-details.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit{
  taskList:Task[] = TASKS;
  toDoList:Task[] = [];
  doneList:Task[] = [];

  selectedTask:Task = {id:0, title: ""};
  
  ngOnInit(): void {
    this.orderList(TASKS);
  }

  onChange(task: Task): void {
    task.completed = !task.completed;
    this.selectedTask = task;
    this.orderList(this.taskList);
  }

  orderList(taskList:Task[]):void {
    this.toDoList = [];
    this.doneList = [];
    taskList.forEach(task => {
      task.completed ? this.doneList.push(task) : this.toDoList.push(task);
    });
  }

}
