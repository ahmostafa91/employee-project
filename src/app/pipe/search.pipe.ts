import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(empArr: Employee[], searchP: string): Employee[] {
    if (!empArr || !searchP) {
      return empArr; // will return the original employee list if search not true
    }

    // tslint:disable-next-line:max-line-length
    return empArr.filter(e => e.name.toLowerCase().indexOf(searchP.toLowerCase()) !== -1); // will return the employee that have his name in search
  }

}
