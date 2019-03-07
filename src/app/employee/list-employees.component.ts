import { Component, OnInit } from '@angular/core';
import { Employee } from './../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  // selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[];
  searchTearm: string; // take the name from search input
  // dataFromChild: string; // to get data from child

  constructor(private _employeeService: EmployeeService, private _router: Router) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployee();
  }

  onClick(empId: number) {
    this._router.navigate(['/employee', empId]);
  }

  /*fromChild(dataEvent: string) {
    this.dataFromChild = dataEvent;
  }*/ // to get data from child
}
