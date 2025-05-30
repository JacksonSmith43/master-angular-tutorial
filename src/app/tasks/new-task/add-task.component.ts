import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; // For NgModel. 
import { AddTaskData } from '../task/task.model';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule], // FormsModule automatically prevents the default form submission behaviour, so we don't need to handle it manually.  
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})

export class AddTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<AddTaskData>();

  enteredTitle = ''; // Two-way data binding with NgModel. 
  enteredSummary = '';
  enteredDueDate = '';

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDueDate
    });
  }

}
