import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Department } from './../models/department.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  // gender = 'male'; // to check the male radio button by default
  // IsActive = true; // to make the check box checked by default
  // department = '3'; // to make the option 3 selected by default
  departments: Department[] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'IT'},
    {id: 3, name: 'HR'},
    {id: 4, name: 'Front-End Developer'}
  ];

  constructor() { }

  ngOnInit() {
  }
  saveEmployee(emForm: NgForm): void {
    console.log(emForm.value);
  }
}
