import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employees-details',
  templateUrl: './employees-details.component.html',
  styleUrls: ['./employees-details.component.css']
})
export class EmployeesDetailsComponent implements OnInit {

  employee: Employee;

  constructor(private _route: ActivatedRoute, private _empService: EmployeeService) { }

  ngOnInit() {
    const id = +this._route.snapshot.params['id']; // get the id param from the url link
    this.employee = this._empService.getEmployeeById(id); // pass the id that get from the link url
  }

}
