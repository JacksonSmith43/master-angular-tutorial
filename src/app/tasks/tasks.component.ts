import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { AddTaskComponent } from './new-task/add-task.component';
import { type AddTaskData } from "./task/task.model";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  @Input() name?: string; // Union Type can also be used that would replace the ?. For example: name: string | undefined
  @Input({ required: true }) userId!: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) { }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTaskParent(id: string) { // Added Parent to the name, to better understand the Ablauf of Methods call, seeing as task also had this name (onCompleteTask).
  }

  onAddStartTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: AddTaskData) {

    this.isAddingTask = false;
  }
}
