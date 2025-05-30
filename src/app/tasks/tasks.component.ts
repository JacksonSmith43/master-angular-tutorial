import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { AddTaskComponent } from './new-task/add-task.component';
import { AddTaskData } from "./task/task.model";

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

  onCompleteTaskParent(id: string) { // Added Parent to the name, to better understand the Ablauf of Methods call, seeing as task also had this name (onCompleteTask).
    this.tasks = this.tasks.filter((task) => task.id !== id); // Due to another array being created, the original array is not modified, but a new one is created, which causes a re-render of the component and when clicking Complete the task is removed from the list. task.id !== id is the Bedienung. If it is true, the task is not included in the new array, if it is false, the task is included in the new array. 
  }

  onAddStartTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: AddTaskData) {
    this.tasks.unshift({ // Unshift (similar to push) adds the new task to the beginning of the array, so it appears at the top of the list.
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    })
    this.isAddingTask = false;
  }
}
