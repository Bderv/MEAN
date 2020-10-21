import { Component, OnInit } from '@angular/core';
import {HttpService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'public';
  tasks: any=[]
  singleTask={}

  constructor(private _httpService: HttpService){}

  ngOnInit(){
  }


  showInfo(id){
    let observable = this._httpService.showOne(id);
    observable.subscribe(data =>{
      console.log('This task', data)
      this.singleTask = data
    })
  }

  showAllButton(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log('Heres the Tasks', data)
      this.tasks = data
      console.log('click event is working')
  })
  }





}
