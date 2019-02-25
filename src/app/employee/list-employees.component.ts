import { Component, OnInit } from '@angular/core';
import { Employee } from './../models/employee.model';
import { EmployeeService } from './employee.service';
import { from } from 'rxjs';

@Component({
  // selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[];
  // dataFromChild: string; // to get data from child

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployee();
  }

  /*fromChild(dataEvent: string) {
    this.dataFromChild = dataEvent;
  }*/ // to get data from child
}
