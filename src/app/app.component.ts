import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Angular Sample Crud';
  employeeArray: Employee[] = [
    {id: 1, name: 'Test', country: 'ES'},
    {id: 2, name: 'Test2', country: 'ES'},
    {id: 3, name: 'Test3', country: 'ES'},
  ];
  selectedEmployee: Employee = new Employee();

  addOrEdit() {
    if(this.selectedEmployee.id === 0) {
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
    }

    this.selectedEmployee = new Employee();
  }

  openForEdit(employee: Employee) {
    this.selectedEmployee = employee;
  }

  delete() {
    if(confirm('Are you sure do you want to delete it?')) {
      this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
    }
    
    this.selectedEmployee = new Employee();
  }
}
