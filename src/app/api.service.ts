import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  link='https://jsonplaceholder.typicode.com/todos';

  constructor(public http:HttpClient) { }

  jsonApi(){
    return this.http.get(this.link)
  }
}
