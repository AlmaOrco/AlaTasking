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

  async getTasks(): Promise<Task[]>{
    this.http.get(this.tasksUrl).subscribe(data => {
      this.taskList = [...data as Task[]];
      this.log(`getTasks() - inside suscribe - this.taskList: ${JSON.stringify(this.taskList)}`);
    });
    
    return (await this.taskList) ?? [];
  }

  async saveTaskToFile(task:Task): Promise<void> {
    this.log(`saveTaskToFile(task) - task: ${JSON.stringify(task)}`);
    task.id = this.getNewTaskId();
    this.http.post(this.tasksUrl, task, {
      reportProgress: true,
      observe: 'events',
    }).subscribe(data => {
      this.log(`saveTaskToFile() - inside suscribe - data: ${JSON.stringify(data)}`);
    });
  }

  getNewTaskId(): number {
    this.getTasks().then((tasks: Task[]) => {
      if(tasks) {
        var max = Math.max.apply(Math, tasks.map(function(o) {return o.id;}))
        this.log(`getNewTaskId() - max: ${max}`);
        return max++;
      } else {
        return 1;
      }
    });
    return 0;
  }
}

