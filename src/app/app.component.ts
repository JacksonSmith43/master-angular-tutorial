import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: false, // true, if this is a 19+ or 14 Angular version and if a standalone component was desired.  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }



}
