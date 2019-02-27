import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employee/list-employees.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { from } from 'rxjs';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ConfirmEqualValidatorDirective } from './share/confirm-equal-validator-directive';
import { EmployeeService } from './employee/employee.service';
import { SelectRequiredValidatorDirective } from './share/selectr-equired-validator.directive';
import { DisplayEmployeeComponent } from './employee/display-employee.component';
import { CreateEmployeeDeactivateGuardService } from './guard/create-employee-deactivate-guard.service';
import { EmployeesDetailsComponent } from './employee/employees-details.component';

const appRoutes: Routes = [
  {path: 'list', component: ListEmployeesComponent},
  {path: 'create', component: CreateEmployeeComponent, canDeactivate: [CreateEmployeeDeactivateGuardService]},
  {path: 'employee/:id', component: EmployeesDetailsComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    ConfirmEqualValidatorDirective,
    SelectRequiredValidatorDirective,
    DisplayEmployeeComponent,
    EmployeesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService, CreateEmployeeDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
