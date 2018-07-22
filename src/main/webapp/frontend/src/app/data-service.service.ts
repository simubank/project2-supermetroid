import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Customer } from './model/Customer';

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


  private messageSource = new BehaviorSubject(new Customer());
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: any) {
    this.messageSource.next(message);
  }

  constructor(private http: Http,
              private httpClient: HttpClient) { }


    searchDB (url: string) {
      return this.http.get(this.javaApi + url)
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
