import { Task } from './task';

export const TASKS: Task[] = [
  { id: 1, title: 'Vincular el check a la propiedad completed', completed: true },
  { id: 2, title: 'Separar tareas completadas de no completadas', completed: true },
  { id: 3, title: 'Tachar formato a las completadas', completed: true },
  { id: 4, title: 'Encapsular los itemList en un componente hijo', completed: true },
  { id: 5, title: 'Meter angular material', completed: true },
  { id: 6, title: 'Cambiar estructuras ngIf y ngFor', completed: true },
  { id: 7, title: 'Dar funcionalidad a los botones de detalles', completed: true },
  { id: 8, title: 'Intentar meter la selection list de material', completed: true, 
      remark: "No me gusta demasiado el resultado. Habría que probar con mat-checkbox, y jugar con los estilos" },
  { id: 9, title: 'Distinguir la funcionalidad de click y change', completed:true, 
      remark: "Lo he conseguido con el componente propio, pero no con el de mat-list-option" },
  { id: 10, title: 'Crear formulario para crear/modificar tareas' },
  { id: 11, title: 'Buscar la manera de guardar la info' },
  { id: 12, title: 'Hacer el texto del botón "completed" cambie a "Uncompleted"' },
  { id: 13, title: 'Hacer que el botón "borrar" devuelva un mensaje y cambie a un nuevo botón "Restaurar"'},
  { id: 14, title: 'Probar con mat-checkbox (sin mat-list)' },
  { id: 15, title: 'Probar a cambiar estilos con mat-list o mat-checkbox', remark: "Borrar código innecesario: task-list-item, comentarios, etc... En función de lo que decida."},
  { id: 16, title: 'Meter subtasks (¿array de tareas o nueva clase?)'}
];