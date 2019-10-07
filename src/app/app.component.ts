import { Component } from '@angular/core';
import { DescriptiveStatementComponent } from './descriptive-statement/descriptive-statement.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expense-tracker';
  initialPage = DescriptiveStatementComponent;
}
