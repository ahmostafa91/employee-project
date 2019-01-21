import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Department } from './../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  dateConfig: Partial<BsDatepickerConfig>; // to make copy of object to custom the props for date style table
  dateOfBirth: Date = new Date(2019, 0, 15); // to set default date
  imageShow = false; // to control the image show by the ngIf

  // gender = 'male'; // to check the male radio button by default
  // IsActive = true; // to make the check box checked by default
  // department = '3'; // to make the option 3 selected by default
  departments: Department[] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'IT'},
    {id: 3, name: 'HR'},
    {id: 4, name: 'Front-End Developer'}
  ];

  constructor() {
    // set date table configs style ngx-bootstrap date table
    this.dateConfig = Object.assign({}, {
    containerClass: 'theme-dark-blue',
    minDate: new Date(2019, 0, 1),
    maxDate: new Date(2019, 11, 31),
    dateInputFormat: 'DD/MM/YYYY'
    });
  }

  imageShowToggle() {
    this.imageShow = !this.imageShow;
  }

  ngOnInit() {
  }
  saveEmployee(emForm: NgForm): void {
    console.log(emForm.value);
  }
}
