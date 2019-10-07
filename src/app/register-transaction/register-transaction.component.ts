import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'ons-page[register-transaction]',
    templateUrl: './register-transaction.component.html',
    styleUrls: ['./register-transaction.component.css']
})
export class RegisterTransactionComponent implements OnInit {
    transactionTypes = [
        { label: 'Deposit', value: 'deposit' },
        { label: 'Expense', value: 'expense' },
    ];

    transactionForm = this.formBuilder.group({
        amount: [null, Validators.compose([
            Validators.min(0),
            Validators.required,
        ])],
        description: [null, Validators.required],
        transactionType: ['', Validators.required],
    });

    constructor(
        private formBuilder: FormBuilder,
    ) { }

    ngOnInit() { }

    save() {
        console.log(this.transactionForm.value);
    }
}
