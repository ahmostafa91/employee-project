import { Component, OnInit, Input } from '@angular/core'; // add , Output, EventEmitter to import to pass data from child to parent
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  @Input() employeeDis: Employee;

  // @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();
  constructor() { }

  ngOnInit() {
  }

  /*handleClick() {
    this.notify.emit(this.employeeDis);
  }*/

}
