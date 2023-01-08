import { Component } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  text?: string;
  day?: string;
  reminder: boolean = false;

  onSubmit() {
    if(!this.text) {
      alert('Please add a task')};
      return;
  }
  readonly newTask = {
    text: this.text,
    day: this.day,
    reminder: this.reminder
  };

}
