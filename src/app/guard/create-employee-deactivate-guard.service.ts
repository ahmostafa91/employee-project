import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreateEmployeeComponent } from './../employee/create-employee.component';

@Injectable()

export class CreateEmployeeDeactivateGuardService implements CanDeactivate<CreateEmployeeComponent> {

  checkSub = false;

  canDeactivate(component: CreateEmployeeComponent): boolean {

    if (component.createEmployeeGuard.dirty && this.checkSub === false) {
      return confirm('Are You Sure You Want To Discard Your Change?');
    }

    return true;
  }

}
