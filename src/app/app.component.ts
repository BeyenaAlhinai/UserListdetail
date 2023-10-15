import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDialogOpen = false;
  selectedUserName: string | null = null;

  openDialog(userName: string) {
    this.selectedUserName = userName;
    this.isDialogOpen = true;
  }

  closeDialog() {
    this.isDialogOpen = false;
    this.selectedUserName = null;
  }
}
