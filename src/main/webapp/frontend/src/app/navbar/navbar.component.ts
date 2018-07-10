import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../data-service.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

public check: any = 'Check';
  constructor(private dataService: DataServiceService, private http: Http) { }

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
