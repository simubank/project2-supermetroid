import { Component, OnInit , Inject} from '@angular/core';
import {DataServiceService} from '../data-service.service';
import { Http } from '@angular/http';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
public check: any = 'Check';

public customer: any;
private id = '63363738-f374-4490-83d4-be9bfba401f1_6c8434d3-9d00-45d9-83d6-5c87cc97cdd8';

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private dataService: DataServiceService, private http: Http) {
  }


  ngOnInit() {
    this.check = this.getData();
    this.getCustomer(this.id);
  }

private getData() {
  return this.dataService.getData()
  .subscribe((data) => {
    this.check = data;
  });
}

private getCustomer(id) {
  return this.dataService.getCustomer(id)
  .subscribe(
    (data) => {
      this.customer = data;
    }
  );
}



}
