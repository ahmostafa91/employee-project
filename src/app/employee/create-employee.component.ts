import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Department } from './../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';
import { CreateEmployeeDeactivateGuardService } from '../guard/create-employee-deactivate-guard.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  @ViewChild('eModule') public createEmployeeGuard: NgForm; // public prop to check the form with guard if dirty or not

  dateConfig: Partial<BsDatepickerConfig>; // to make copy of object to custom the props for date style table
  // dateOfBirth: Date = new Date(2019, 0, 15); // to set default date
  imageShow = false; // to control the image show by the ngIf
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: null,
    phoneNumber: null,
    contactPreferences: null,
    dataOfBirth: null,
    department: 'select',
    isActive: null,
    photoPath: null,
  };

  // gender = 'male'; // to check the male radio button by default
  // IsActive = true; // to make the check box checked by default
  // department = '3'; // to make the option 3 selected by default
  departments: Department[] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'IT'},
    {id: 3, name: 'HR'},
    {id: 4, name: 'Front-End Developer'}
  ];

  constructor(private _employeeService: EmployeeService, private _router: Router, private guard: CreateEmployeeDeactivateGuardService) {
    // set date table configs style ngx-bootstrap date table
    this.dateConfig = Object.assign({}, {
    containerClass: 'theme-dark-blue',
    // minDate: new Date(2019, 0, 1),
    // maxDate: new Date(2019, 11, 31),
    // dateInputFormat: 'DD/MM/YYYY'
    });
  }

  imageShowToggle() {
    this.imageShow = !this.imageShow;
  }

  ngOnInit() {
  }
  /*saveEmployee(emForm: NgForm): void {
    console.log(emForm.value);
  }*/

  /*saveEmployee(newEmployee: Employee): void {
    console.log(newEmployee);
  }*/

  saveEmployee(): void {
    if (!this.guard.checkSub) {
      this._employeeService.save(this.employee);
      this.guard.checkSub = true;
      this._router.navigate(['list']);
    }
  }
}
