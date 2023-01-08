import { Injectable } from '@angular/core';
import {Task} from '../task';
import {TASKS} from '../mock-task';
import {Observable, of} from 'rxjs'
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';


  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }

  constructor(private http:HttpClient) { }

  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
}
