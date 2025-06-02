import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"; // Things that are requuired for every Angular app are included here for it to run properly. Is required when Angular Modules are used. 

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";

@NgModule({
    declarations: [AppComponent], // For non-standalone components (modules). 
    bootstrap: [AppComponent], // This is the root component. 
    imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent] // For standalone components. 
})
export class AppModule {

}