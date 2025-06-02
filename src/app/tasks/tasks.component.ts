import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
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

  onAddStartTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

}
