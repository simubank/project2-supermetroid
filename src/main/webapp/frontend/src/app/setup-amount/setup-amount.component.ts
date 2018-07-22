import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-setup-amount',
  templateUrl: './setup-amount.component.html',
  styleUrls: ['./setup-amount.component.css']
})
export class SetupAmountComponent implements OnInit {


  public customer: any;
  public hasSavings: boolean;
  public timeFrame: Array<String>;
  public sliderVal: number;
  public account: string;
  constructor(private dataService: DataServiceService) {

  }

  ngOnInit() {
    this.account = "Chequeing";
    this.hasSavings = true;
    this.timeFrame = ['Daily', 'Weekly', 'Bi-Weekly', 'Monthly' ];
    this.dataService.currentMessage.subscribe(
      (customer) => this.customer = customer);
  }

  onClickChequeing() {
    this.account = 'Chequeing';
  }

  onClickSavings() {
    this.account = 'Savings';
  }
  

}
