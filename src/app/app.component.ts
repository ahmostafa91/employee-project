import { Component } from '@angular/core';
import { CreateEmployeeDeactivateGuardService } from './guard/create-employee-deactivate-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee-project';

  constructor(private guard: CreateEmployeeDeactivateGuardService) {}

  /*changeSub() {
    this.guard.checkSub = false;
  }*/ // for change this prop to first idea to stop the guard while submit
}
