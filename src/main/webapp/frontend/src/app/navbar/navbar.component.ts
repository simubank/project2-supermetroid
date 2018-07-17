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
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private dataService: DataServiceService, private http: Http) { 
    console.log(this.storage.get("1"));
  }

  ngOnInit() {
    this.check = this.getData();
  }

private getData() {
  return this.dataService.getData()
  .subscribe((data) => {
    this.check = data;
  });
}

}
