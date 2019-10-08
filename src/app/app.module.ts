import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OnsenModule } from 'ngx-onsenui';

import { AppComponent } from './app.component';
import { DescriptiveStatementComponent } from './descriptive-statement/descriptive-statement.component';
import { RegisterTransactionComponent } from './register-transaction/register-transaction.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BaseDataSourceStrategy } from './shared/data-sources/base-data-source-strategy';
import { LocalStorageDataSourceStrategy } from './shared/data-sources/local-storage-data-source-strategy';

@NgModule({
    declarations: [
        AppComponent,
        DescriptiveStatementComponent,
        RegisterTransactionComponent,
    ],
    imports: [
        BrowserModule,
        OnsenModule,
        ReactiveFormsModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ],
    entryComponents: [
        DescriptiveStatementComponent,
        RegisterTransactionComponent,
    ],
    providers: [
        { provide: BaseDataSourceStrategy, useExisting: LocalStorageDataSourceStrategy },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
