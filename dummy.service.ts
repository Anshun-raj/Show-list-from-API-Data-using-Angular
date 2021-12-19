import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DummyService {

  constructor(private http:HttpClient) { }
  getdummyData()
  {
    let url="https://jsonplaceholder.typicode.com/todos/";
    return this.http.get(url);
  }
}