import { Component, OnInit } from '@angular/core';
import { Transaction } from '../model/transaction';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }
  private transactions: Transaction[] = [];



  ngOnInit() {

  }

  getTransactions() {
    return this.transactions;
  }

}
