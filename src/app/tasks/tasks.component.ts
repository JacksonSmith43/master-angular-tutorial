import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  @Input() name?: string; // Union Type can also be used that would replace the ?. For example: name: string | undefined
  @Input({ required: true }) userId!: string;

  tasks = [
    {
      id: ' t1',
      userId: 'ui1',
      title: 'Finish course',
      summary: 'Complete the Angular course on Udemy',
      dueDate: '22.06.2025'
    },
    {
      id: ' t1',
      userId: 'ui1',
      title: 'Do Anki',
      summary: 'Review the vocabulary on Anki',
      dueDate: '29.05.2025'
    }, {
      id: ' t1',
      userId: 'ui2',
      title: 'Do Queens Game',
      summary: 'Play a game of Queens',
      dueDate: '29.05.2025'
    },
  ]

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
}
