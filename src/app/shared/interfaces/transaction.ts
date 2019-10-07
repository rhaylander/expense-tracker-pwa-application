import { TransactionType } from '../enum/transaction-type';

export interface Transaction {
    amount: number;
    createdAt: string;
    description: string;
    transactionType: TransactionType;
}
