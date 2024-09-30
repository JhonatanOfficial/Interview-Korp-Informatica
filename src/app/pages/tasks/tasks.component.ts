import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from "../../components/container/container.component";
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Adicione esta linha
import { NgFor, NgIf } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { UserTask } from '../../@types/task';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [ContainerComponent, ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  taskForm: FormGroup;
  error: boolean = false;
  tasks: UserTask[] = [];
  doneTasks: UserTask[] = [];

  constructor(private taskService: TaskService, private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      task: new FormControl('', [Validators.required])
    });
  }

  submit() {
    if (this.taskForm.valid) {
      const newTask: UserTask = {
        task: this.taskForm.value.task,
        done: false
      };

      this.taskService.addTask(newTask).subscribe((task) => {
        this.tasks.push(task);
        this.taskForm.reset();
      });

    } else {
      this.error = true;

      setTimeout(() => {
        this.error = false;
      }, 3000);
    }
  }

 ngOnInit(): void {
  this.taskService.getTasks().subscribe((dado) => {
    this.doneTasks = dado.filter(task => task.done);
    this.tasks = dado.filter(task => !this.doneTasks.some(doneTask => doneTask.id === task.id)); 
  });
}

  deleteTask(task: UserTask) {
    this.taskService.deleteTask(task).subscribe(() =>
      (this.tasks = this.tasks.filter((t) => t.id !== task.id)));
  }

  toogleDone(task: UserTask) {
    task.done = !task.done;

    if (task.done) {
      this.doneTasks.push(task);
    } else {

      this.doneTasks = this.doneTasks.filter(t => t.id !== task.id);
    }

    this.taskService.updateTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });
  }

}
