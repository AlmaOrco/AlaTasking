import { Injectable } from '@angular/core';
import { Task } from './task';
import { TASKS } from './task-mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    return of(TASKS);
  }
}
