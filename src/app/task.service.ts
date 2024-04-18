import { Injectable } from '@angular/core';
import { Task } from './task';
import { TASKS } from './task-mock';
import { Observable, of } from 'rxjs';
//import { writeFileSync , readFileSync} from 'fs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskList:Task[];
  private tasksUrl = 'http://localhost:3000/tasks';

  constructor(
    private http: HttpClient,
    /* private messageService: MessageService */) { }

  private log(message: string):void {
    console.log(`[TaskService] ${message}`);
  }

  async getTasks(): Promise<Task[]> {
    this.log(`get Tasks()`);
    const data = await fetch(this.tasksUrl);
    this.log(`get Tasks() - data: ${data}`);
    return (await data.json()) ?? [];
  }

  saveTaskToFile(task:Task): void {
    //this.getTasksFromFile().subscribe(tasks => this.taskList = tasks);
    this.taskList = TASKS;
    this.taskList.push(task);
    const content = {"tasks": this.taskList};
    //writeFileSync('src/assets/tasks.json',JSON.stringify(content) ,'utf8');
    console.log(content);
  }
}
