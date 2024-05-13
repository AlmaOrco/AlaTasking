import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task';
import { MatCardModule } from '@angular/material/card';
import { TaskActionsComponent } from '../task-actions/task-actions.component';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [MatCardModule, TaskActionsComponent],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  @Input({required:true}) selectedTask: Task;
  @Input() editing: boolean;
  @Output() updateList = new EventEmitter();


  log(text:string) {
    console.log(`TaskCardComponent - log: ${text}`)
  }

  deleteTask(): void{
    console.log("[TaskCardComponent] deleteTask");
  }
  
  completeTask(selectedTask: Task): void{
    console.log(`[TaskCardComponent] completeTask(selectedTask) - selectedTask: ${JSON.stringify(selectedTask)}`);
    selectedTask.completed = !selectedTask.completed;
    //TODO Guardar desde aquí. 
    this.updateList.emit();
  }
}
