import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
// import { Observable } from 'rxjs/add/operator/map';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private url: String = 'http://localhost:8080';
  constructor(private http: Http ) { }

  getData() {
    return this.http.get(this.url + '/api/home')
    .pipe(
    map(response => response.json())
    );
    }
}
