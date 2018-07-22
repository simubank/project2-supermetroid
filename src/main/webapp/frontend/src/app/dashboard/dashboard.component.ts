import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Customer } from '../model/Customer';
import { DataServiceService } from '../data-service.service';
import { splitAtColon } from '@angular/compiler/src/util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  @Output() valueChange = new EventEmitter() ;
  public customer: any = '';
  public notification: string = null;
  public notificationClass: string = null;
  public showPayment = false;
  public paymentText = 'Show Payments';
    private customerIds: string[] = [
      '63363738-f374-4490-83d4-be9bfba401f1_6c8434d3-9d00-45d9-83d6-5c87cc97cdd8',
      '63363738-f374-4490-83d4-be9bfba401f1_85a09159-bda3-426a-bcd3-00532807d1df',
      '63363738-f374-4490-83d4-be9bfba401f1_e2ba9727-a181-48f6-a1bc-0abf5ce173a2'
  ];
  constructor(private dataService: DataServiceService) {
   }

  ngOnInit() {
    this.getCustomer(this.customerIds[0]);
  }

getCustomer(id: string) {
this.dataService.searchAPI('/customers/' + id).subscribe
((data) => {
  this.customer = data;
  this.customer = this.customer.result[0];
  this.dataService.changeMessage(this.customer);
});
}

switchCustomer(id: string) {
this.getCustomer(this.customerIds[id]);
}
displayNotification(notification: string) {
  const strings = notification.split(':');
  this.notificationClass = strings[0];
  this.notification = strings[1];
}
disableNotification() {
  this.notification = null;
}
togglePayment() {
  this.showPayment = this.showPayment === true ? false : true;
  this.paymentText = this.paymentText === 'Show Payments' ? 'Hide Payments' : 'Show Payments';
}


}




