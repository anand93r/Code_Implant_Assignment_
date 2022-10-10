import { Component } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';
  posts:any;

  constructor(public api:ApiService){}
  ngOnInit(){
    this.api.jsonApi()
    .subscribe(response =>{
      this.posts=response;
    })
  }
}
