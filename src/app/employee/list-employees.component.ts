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

  private _searchTerm: string; // take the name from search input
  // We are binding to this property in the view template, so this
  // getter is called when the binding needs to read the value

  // dataFromChild: string; // to get data from child

  // Use this property to stored filtered employees, so we do not
  // lose the original list and do not have to make a round trip
  // to the web server on every new search
  filteredEmployees: Employee[];


  get searchTerm(): string {
    return this._searchTerm;
  }

  // This setter is called everytime the value in the search text box changes
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filterEmployees(value);
  }

  constructor(private _employeeService: EmployeeService, private _router: Router) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployee();
    this.filteredEmployees = this.employees;
  }

  onClick(empId: number) {
    this._router.navigate(['/employee', empId]);
  }

  filterEmployees(searchString: string) {
    return this.employees.filter(employee =>
      employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  /*fromChild(dataEvent: string) {
    this.dataFromChild = dataEvent;
  }*/ // to get data from child
}
