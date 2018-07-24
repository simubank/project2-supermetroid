import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Transaction } from '../model/transaction';
import { TransactionArray } from '../model/transaction-array';
import { DataServiceService } from '../data-service.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent  {

  @Output() notificationChange = new EventEmitter();
  @Output() customerChange = new EventEmitter();
  @Input() customer: any;

  private customerDb: any;
  private accountBalance: number;
  public notificationMessage: string;



  constructor(private dataService: DataServiceService) {

  }

  getTransactions() {
    return  TransactionArray.getTransactions(this.customer);
  }


  makePayment(index: string): any {
    let transaction: Transaction = TransactionArray.getTransactions(this.customer)[index];

    this.dataService.postDB('/transaction/' + this.customer.id, transaction).subscribe(
      (customerDb) => {
        this.customerDb = customerDb;
        this.customerChange.emit(customerDb);
        transaction = this.customerDb.allowanceAccount.transactions[this.customerDb.allowanceAccount.transactions.length - 1];
        if (!transaction.success) {
          if (transaction.message != null) {
            this.notificationChange.emit('alert alert-danger' + ':' + transaction.message);
          }
        } else {
            if (transaction.message) {
              this.notificationChange.emit('alert alert-success' + ':' + transaction.message);
            }
        }
      }
    );

  }


}
