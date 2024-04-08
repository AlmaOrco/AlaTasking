import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TASKS } from '../task-mock';
import { Task } from '../task';
import { TaskDetailsComponent } from '../task-details/task-details.component';
import { TaskListItemComponent } from '../task-list-item/task-list-item.component';
import { MatListModule } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor, TaskDetailsComponent, TaskListItemComponent, MatListModule, MatIcon, TaskFormComponent],
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
    this.selectedTask = task;
    this.orderList(this.taskList);
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

  createTask(): void{
    this.selectedTask = {
      id: -1,
      title: ""
    }
  }
  createNewTask(task:Task): void {
    task.id = this.taskList[this.taskList.length-1].id + 1;
    this.taskList.push(task);
    this.orderList(this.taskList)
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
