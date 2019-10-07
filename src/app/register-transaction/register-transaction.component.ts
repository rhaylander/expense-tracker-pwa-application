import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseDataSourceStrategy } from '../shared/data-sources/base-data-source-strategy';
import { Transaction } from '../shared/interfaces/transaction';
import { DataSourceType } from '../shared/enum/data-source-type';
import { TransactionType } from '../shared/enum/transaction-type';
import { OnsNavigator } from 'ngx-onsenui';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'ons-page[register-transaction]',
    templateUrl: './register-transaction.component.html',
    styleUrls: ['./register-transaction.component.css']
})
export class RegisterTransactionComponent implements OnInit {
    transactionTypes = [
        { label: 'Deposit', value: TransactionType.Deposit },
        { label: 'Expense', value: TransactionType.Expense },
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
        private dataSource: BaseDataSourceStrategy,
        private _navigator: OnsNavigator,
    ) { }

    ngOnInit() { }

    save() {
        return this.dataSource.storeItem<Transaction>(DataSourceType.Transactions, {
            amount: parseFloat(this.transactionForm.value.amount),
            createdAt: new Date().toISOString(),
            description: this.transactionForm.value.description,
            transactionType: this.transactionForm.value.transactionType,
        })
            .pipe(finalize(() => this._navigator.element.popPage()))
            .subscribe(
            null,
            (error) => {
                console.error(error);
                alert('Failed to store the transaction. Please, try again.')
            }
        );
    }
}
