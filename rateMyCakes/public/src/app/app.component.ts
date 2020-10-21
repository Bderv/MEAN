import { Component } from '@angular/core';
import {HttpService} from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'public';
  cakeform: any;
  cakes: any=[]
  

  //cakeResults:Array<{baker:string,imgtag:string}>

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  this.cakeform = {'baker': '', 'imgtag': ''}
  this.displayCakes()
  }


  onSubmit(){
    console.log('form submitted', this.cakeform)
    //this.cakeResults.push({baker:this.cakeform.baker,imgtag:this.cakeform.imgtag})
    this._httpService.addCake(this.cakeform).subscribe(data =>{
      console.log('Created Cake', data)
      this.displayCakes()
      this.cakeform = {baker: '',imgtag: ''}
    })
  }

  displayCakes(){
    this._httpService.getCakes().subscribe(data=>{
      console.log('Show them cakes baby!', data)
      this.cakes = data
    })
  }

  Delete(cakeId){
    this._httpService.deleteCake(cakeId).subscribe(data=>{
      console.log('Deleted Cake', data)
      this.displayCakes() 
    })
  }

}
