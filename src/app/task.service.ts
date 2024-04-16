import { Injectable } from '@angular/core';
import { Task } from './task';
import { TASKS } from './task-mock';
import { Observable, of } from 'rxjs';
import { readFile } from 'node:fs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskList:Task[];
  constructor() { }

  getTasks(): Observable<Task[]> {
    return of(TASKS);
  }

  async getTasksFromFile(): Promise<Observable<Task[]>> {
     readFile('src/assets/tasks.json', {encoding:'utf-8'}, (err, data) =>{
      if (err) {
        console.log(err);
      } else {
        this.taskList = JSON.parse(data).tasks;

      }
    })
    console.log(this.taskList);
    return of(this.taskList);
    return of(TASKS);
  }
}
