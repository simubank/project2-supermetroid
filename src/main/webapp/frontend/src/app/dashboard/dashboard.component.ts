import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Customer } from '../model/Customer';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  @Output() valueChange = new EventEmitter() ;
  public customer: any = '';
  private currentBalance:number; 
  private timeLeft:string;
  private totalBalance:number; 
  private points:number;
  private transaction: any[]; 
  private icon:number; 


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
    this.currentBalance=99; 
    this.totalBalance=100; 
    this.timeLeft="2Days!"; 
    this.points=0;
    this.icon=1; 
   }

  ngOnInit() {
    this.getCustomer(this.customerIds[0]);
  }

getCustomer(id: string) {
    this.dataService.searchAPI('/customers/' + id).subscribe
    ((data) => {
      this.customer = data;
      this.customer = this.customer.result[0];
      this.dataService.changeCustomer(this.customer);
    });
  }

  getNotifications(id: string) {
    this.dataService.searchDB('/notifications/' + id).subscribe
    ((data) => {
      this.dataService.changeNotifications(data);
    });
  }

  switchCustomer(id: number) {
    this.getCustomer(this.customerIds[id]);
    this.getNotifications(this.customerIds[id]);
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




