import { Component, OnInit } from '@angular/core';
import { Employee } from './../models/employee.model';

@Component({
  // selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[] = [
    {
      id: 1,
      name: 'Ahmed',
      gender: 'Male',
      contactPreferences: 'Email',
      email: 'ahmed@yahoo.com',
      dataOfBirth: new Date('5/3/1991'),
      department: 'Front-End Developer',
      isActive: true,
      photoPath: 'assets/images/33.jpg'
    },
    {
      id: 2,
      name: 'Ahmed2',
      gender: 'Male',
      contactPreferences: 'Email',
      email: 'ahmed@yahoo.com2',
      dataOfBirth: new Date('10/25/1991'),
      department: 'Front-End Developer2',
      isActive: true,
      photoPath: 'assets/images/33.jpg'
    },
    {
      id: 3,
      name: 'Ahmed3',
      gender: 'Male',
      contactPreferences: 'Email',
      email: 'ahmed@yahoo.com3',
      dataOfBirth: new Date('10/25/1991'),
      department: 'Front-End Developer3',
      isActive: true,
      photoPath: 'assets/images/33.jpg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
