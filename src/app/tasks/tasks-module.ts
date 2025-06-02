import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { AddTaskComponent } from "./new-task/add-task.component";
import { SharedModule } from "../shared/shared-module";

@NgModule({
    declarations: [TasksComponent, TaskComponent, AddTaskComponent],
    exports: [TasksComponent],
    imports: [SharedModule, CommonModule, FormsModule] // CommonModule: Seeing as BrowserModule can only be used for root modules. 
})
export class TasksModule {

}