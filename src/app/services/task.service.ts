import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserTask } from '../@types/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) { }

  addTask(task: UserTask) : Observable<UserTask>{
    return this.http.post<UserTask>(`${this.apiUrl}`, task);
  }

  getTasks(): Observable<UserTask[]> {
    return this.http.get<UserTask[]>(this.apiUrl);
  }

  deleteTask(Task: UserTask): Observable<UserTask>{
    return this.http.delete<UserTask>(`${this.apiUrl}/${Task.id}`);
  }

  updateTask(tarefa: UserTask) : Observable<UserTask>{
    return this.http.put<UserTask>(`${this.apiUrl}/${tarefa.id}`, tarefa);
  }
}