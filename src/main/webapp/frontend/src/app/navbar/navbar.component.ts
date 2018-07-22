import { DataServiceService } from './../data-service.service';
import { Component, OnInit , Inject} from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public notifications: any;
  public customer: any;

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

  getNotifications() {
    this.dataService.searchDB('/notifications/' + this.customer.id).subscribe
    ((data) => {
      this.dataService.changeNotifications(data);
    });
  }

  sendBell() {
    // do something
  }
}



