import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  employees: Employee[];
  constructor() {
    this.title = "Registration details";
    this.employees = [new Employee(1, 'Raghav', 'Singh', 'A/22 Gaziabad', 'raghavsingh@gmail.com', 'raghav@123', 'Male', '22-Aug-1990'),
    new Employee(2, 'Sujit', 'Kumar', 'Kanpur', 'sujitkumar@rediffmail.com', 'sujitkumar@123', 'Male', '12-Nov-1981'),
    new Employee(3, 'Payel', 'Dutta', 'Kolkata', 'payeldutta@gmail.com', 'payel@123', 'Female', '12-Mar-1985'),
    new Employee(4, 'Murali', 'Naidu', 'Chennai', 'muralinaidu@gmail.com', 'muralinaidu@123', 'Male', '05-Jun-1989')

    ];

  }
}
