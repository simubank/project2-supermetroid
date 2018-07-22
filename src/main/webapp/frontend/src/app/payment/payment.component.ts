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
  @Input() customer: any;
  private accountBalance: number;
  public notificationMessage: string;



  constructor(private dataService: DataServiceService) {

  }

  getTransactions() {
    return  TransactionArray.getTransactions(this.customer);
  }


  makePayment(index: string): any {
    const transaction: Transaction = TransactionArray.getTransactions(this.customer)[index];
      this.dataService.searchDB('/balance/' + this.customer.id).subscribe(
        (balance) => {

          if (balance >= transaction.currencyAmount) {

              // transfer money
              // post transaction

          } else {
            this.notificationMessage = 'Sorry! You don\'t have enough funds to process this transaction';
             this.notificationChange.emit('alert alert-danger' + ':' + this.notificationMessage);
            }
        },
        (error) => {
            this.notificationMessage = 'Something went wrong, please try again';
            this.notificationChange.emit(this.notificationMessage);
        }
      );
  }


}
