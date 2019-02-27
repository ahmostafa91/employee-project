import { Injectable } from '@angular/core';
import { Employee } from './../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private listEmployee: Employee[] = [
    {
      id: 1,
      name: 'Ahmed',
      gender: 'Male',
      contactPreferences: 'Email',
      email: 'ahmed@yahoo.com',
      dataOfBirth: new Date('5/3/1991'),
      department: '3',
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
      department: '1',
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
      department: '2',
      isActive: true,
      photoPath: 'assets/images/33.jpg'
    }
  ];

  getEmployee(): Employee[] {
    return this.listEmployee;
  }

  getEmployeeById(_id: number): Employee {
     return this.listEmployee.find(e => e.id === _id); // find the employee by the id that get from the ActivetedRoute from link
  }

  save(employee: Employee) {
    this.listEmployee.push(employee);
  }
  constructor() { }
}
