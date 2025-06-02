import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"; // Things that are requuired for every Angular app are included here for it to run properly. Is required when Angular Modules are used. 
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { CardComponent } from "./shared/card/card.component";
import { TaskComponent } from "./tasks/task/task.component";
import { AddTaskComponent } from "./tasks/new-task/add-task.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent,
        CardComponent,
        TasksComponent,
        TaskComponent,
        AddTaskComponent
    ], // declarations: For non-standalone components (modules). 
    bootstrap: [AppComponent], // This is the root component. 
    imports: [BrowserModule, FormsModule] // For standalone components. 
})

export class AppModule {

}