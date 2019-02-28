import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employees-details',
  templateUrl: './employees-details.component.html',
  styleUrls: ['./employees-details.component.css']
})
export class EmployeesDetailsComponent implements OnInit {

  employee: Employee;
  private _id: number;

  constructor(private _route: ActivatedRoute, private _empService: EmployeeService, private _router: Router) { }

  ngOnInit() {
    this._route.paramMap.subscribe((par) => { // watch for changes in param and get it
      this._id = +par.get('id'); // assign the id from route link to id
      this.employee = this._empService.getEmployeeById(this._id); // pass the id that get from the link url to service to get the employee
    });
    // const id = +this._route.snapshot.params['id']; // get the id param from the url link
    // this.employee = this._empService.getEmployeeById(id); // pass the id that get from the link url
  }

  nextEmp() { // increment the id on click to get the next employee
    if (this._id < 3) { // 3 because thats the length of the employee array
      this._id = this._id + 1;
    } else {
      this._id = 1;
    }
    this._router.navigate(['/employee', this._id]); // to navigate to the route with the new incremented id
  }

}
