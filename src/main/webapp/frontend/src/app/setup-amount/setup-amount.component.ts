import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from '../data-service.service';


@Component({
  selector: 'app-setup-amount',
  templateUrl: './setup-amount.component.html',
  styleUrls: ['./setup-amount.component.css']
})
export class SetupAmountComponent implements OnInit {


  public customer: any;
  constructor(private dataService: DataServiceService) {

  }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(
      (customer) => this.customer = customer);
  }

}
