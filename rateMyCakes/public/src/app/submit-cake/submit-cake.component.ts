import { Component, OnInit, Input } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-submit-cake',
  templateUrl: './submit-cake.component.html',
  styleUrls: ['./submit-cake.component.scss']
})
export class SubmitCakeComponent implements OnInit {
  singleCake={}

  @Input() cakes: []

  constructor(private _httpService: HttpService){};
  
  ngOnInit(){
  }

  showInfo(id){
    let observable = this._httpService.showOne(id);
    observable.subscribe(data =>{
      console.log('This task', data)
      this.singleCake = data
    })
  }

}
