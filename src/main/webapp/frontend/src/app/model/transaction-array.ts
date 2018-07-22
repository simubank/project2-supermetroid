import {Transaction} from './transaction';


export class TransactionArray {




  static  getTransactions(customer: any) {
     const transactions: Transaction[] = [];
     transactions.push(
      new Transaction(customer.accountId, customer.id, ['ALLOWANCE', 'RESTAURANT'], 'Coffee at Tim Hortons', 1.99, 'Tim Hortons'),
      new Transaction(customer.accountId, customer.id, ['ALLOWANCE', 'GROCERY'], 'Grocery at Walmart', 50, 'Walmart'),
        new Transaction(customer.accountId, customer.id, ['ALLOWANCE', 'RESTAURANT'], 'Dinner', 20, 'Jack Astor\'s'),
        new Transaction(customer.accountId, customer.id, ['ALLOWANCE', 'GROCERY'], 'Milk', 10, 'Rexall Drug Store')
     );
    return transactions;
  }

}
