import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { RegisterTransactionComponent } from '../register-transaction/register-transaction.component';

@Component({
  selector: 'ons-page[descriptive-statement]',
  templateUrl: './descriptive-statement.component.html',
  styleUrls: ['./descriptive-statement.component.css']
})
export class DescriptiveStatementComponent implements OnInit {

  constructor(private navigator: OnsNavigator) { }

  ngOnInit() {
  }

  push() {
    // Push SecontPageComponent to `ons-navigator
    this.navigator.element.pushPage(RegisterTransactionComponent);
  }

}
