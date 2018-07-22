import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Customer } from './model/Customer';
import { Transaction } from './model/transaction';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  static  homePath = 'api/home';
  private javaApi: String = 'http://localhost:8080/api';
  private botsAPI: String = 'https://dev.botsfinancial.com/api';
  private token: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ' +
  'pc3MiOiJDQlAiLCJ0ZWFtX2lkIjoiMjgxMzc2OSIsImV4cCI6OTIyMzM3MjAzNjg1NDc3NSwiYXBwX2lkIjoiNjMzNjM3MzgtZjM3NC00NDkwL' +
  'TgzZDQtYmU5YmZiYTQwMWYxIn0.-zxZLeTAAroJ1TSkMHqfFgEf7DWKubyYDDFiU-Wragw';


  private customerSource = new BehaviorSubject(new Object());
  customerMessage = this.customerSource.asObservable();

  private notificationsSource = new BehaviorSubject(new Object());
  notificationsMessage = this.notificationsSource.asObservable();

  private customerDBSource = new BehaviorSubject(new Object());
  customerDBMessage = this.customerDBSource.asObservable();

  changeCustomer(customer: any) {
    this.customerSource.next(customer);
  }

  changeNotifications(notifications: any): any {
    this.notificationsSource.next(notifications);
  }

  changeCustomerDB(customer: any) {
    this.customerDBSource.next(customer);
  }

  constructor(private http: Http,
              private httpClient: HttpClient) { }


    searchDB (url: string) {
      return this.http.get(this.javaApi + url)
    .pipe(
      map(response => response.json())
      );
    }

    postDB(url: string, transaction: Transaction) {
    return this.http.post(this.javaApi + url, transaction)
      .pipe(
              map(response => response.json())
        );
    }
     searchAPI (url: string) {
      const headers = new HttpHeaders({
        'Authorization' : this.token
      });
      return this.httpClient.get(this.botsAPI + url, {headers});

    }



}
