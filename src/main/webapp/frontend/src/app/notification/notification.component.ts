import { DataServiceService } from './../data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {

  public notifications: any;
  public customer: any;
  public oldCustomer: any;
  constructor(private dataService: DataServiceService) {
    this.dataService.customerMessage.subscribe(
      (newCustomer) => {
        this.customer = newCustomer;
      }
    );
    this.dataService.notificationsMessage.subscribe(
      (newNotifications) => {
        this.notifications = newNotifications;
      }
    );
  }
}
