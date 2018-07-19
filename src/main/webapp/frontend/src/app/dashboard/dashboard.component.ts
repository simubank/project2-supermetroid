import { Component, OnInit, Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
    this.storage.set("1",232);
  }


  saveInLocal(key, val): void {
    this.storage.set("1",232); 
    }

}




     