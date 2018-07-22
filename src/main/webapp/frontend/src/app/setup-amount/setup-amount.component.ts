import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from '../data-service.service';


@Component({
  selector: 'app-setup-amount',
  templateUrl: './setup-amount.component.html',
  styleUrls: ['./setup-amount.component.css']
})
export class SetupAmountComponent implements OnInit {


  public customer: any;
  public recommendedAmount: string;
  constructor(private dataService: DataServiceService) {

  }

  ngOnInit() {
    this.dataService.customerMessage.subscribe(
      (customer) => this.customer = customer);
  }

}
