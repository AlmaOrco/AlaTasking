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
  private tasksUrl = 'api/tasks';

  constructor(
    private http: HttpClient,
    /* private messageService: MessageService */) { }

  private log(message: string):void {
    console.log(`TaskService: ${message}`);
  }

  getTasks(): Observable<Task[]> {
    this.log("get Tasks()");
    /* return */ this.http.get<Task[]>(this.tasksUrl);
    return of(TASKS);
  }

/*   getTasksFromFile(): Observable<Task[]> {
    const content = readFileSync('src/assets/tasks.json', {encoding:'utf-8'})
    this.taskList = JSON.parse(content).tasks;
    console.log(this.taskList);
    return of(this.taskList);
  } */

  saveTaskToFile(task:Task): void {
    //this.getTasksFromFile().subscribe(tasks => this.taskList = tasks);
    this.taskList = TASKS;
    this.taskList.push(task);
    const content = {"tasks": this.taskList};
    //writeFileSync('src/assets/tasks.json',JSON.stringify(content) ,'utf8');
    console.log(content);
  }
}
