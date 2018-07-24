import {Transaction} from './transaction';


export class TransactionArray {




  static  getTransactions(customer: any) {
     const transactions: Transaction[] = [];
     transactions.push(
      new Transaction(customer.accountId, customer.id, ['ALLOWANCE', 'RESTAURANT'], 'Coffee at Tim Hortons', 2, 'Tim Hortons'),
      new Transaction(customer.accountId, customer.id, ['ALLOWANCE', 'GROCERY'], 'Grocery at Sobeys', 50, 'Sobeys'),
        new Transaction(customer.accountId, customer.id, ['ALLOWANCE', 'RESTAURANT'], 'Dinner', 20, 'Jack Astor\'s'),
        new Transaction(customer.accountId, customer.id, ['ALLOWANCE', 'GROCERY'], 'Milk', 10, 'Rexall'),
        new Transaction(customer.accountId, customer.id, ['ALLOWANCE', 'VISIT'], 'Go inside a restaurant', 0, 'Visit')
     );
    return transactions;
  }

}
