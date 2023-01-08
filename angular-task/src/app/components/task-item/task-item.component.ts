import { Component, EventEmitter, Input, Output } from '@angular/core';
import  {Task} from '../../task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
@Input() task!: Task;
@Output() onDeleteTask: EventEmitter<Task> = new EventEmitter<Task>();
@Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
faTimes = faTimes;
onDelete(task: Task){
  this.onDeleteTask.emit(task);
}
onToggle(task: Task){
  this.onToggleReminder.emit(task);
  
}

}
