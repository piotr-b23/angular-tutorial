import { Component, Input } from '@angular/core';
import  {Task} from '../../task';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
@Input() task!: Task;
}
