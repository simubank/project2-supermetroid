import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../model/transaction';
import { TransactionArray } from '../model/transaction-array';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @Input() customer: any;




  constructor() {
  }
  ngOnInit() {
  }

  getTransactions() {
    return  TransactionArray.getTransactions(this.customer);
  }
  makePayment(index: number) {
    console.log(TransactionArray.getTransactions(this.customer)[index]);
  }

}
