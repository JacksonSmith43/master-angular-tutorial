import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"; // Things that are requuired for every Angular app are included here for it to run properly. Is required when Angular Modules are used. 

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { SharedModule } from "./shared/shared-module";
import { TasksModule } from "./tasks/tasks-module";

@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent], // declarations: For non-standalone components. 
    bootstrap: [AppComponent], // This is the root component. 
    imports: [BrowserModule, SharedModule, TasksModule] // For standalone components. 
})

export class AppModule {
}