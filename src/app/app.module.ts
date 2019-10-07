import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OnsenModule } from 'ngx-onsenui';

import { AppComponent } from './app.component';
import { DescriptiveStatementComponent } from './descriptive-statement/descriptive-statement.component';
import { RegisterTransactionComponent } from './register-transaction/register-transaction.component';

@NgModule({
    declarations: [
        AppComponent,
        DescriptiveStatementComponent,
        RegisterTransactionComponent,
    ],
    imports: [
        BrowserModule,
        OnsenModule,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ],
    entryComponents: [
        DescriptiveStatementComponent,
        RegisterTransactionComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
