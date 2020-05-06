import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-http1',
  templateUrl: './http1.component.html',
  styleUrls: ['./http1.component.css']
})
export class Http1Component implements OnInit {


  ngOnInit(): void {
  }
  users:string[]

  constructor(private githubService:HttpService){}

  getUsers(){
   
    this.githubService.getData().subscribe((data)=> {
      console.log(data);
      this.users=data
    });
  }

}
