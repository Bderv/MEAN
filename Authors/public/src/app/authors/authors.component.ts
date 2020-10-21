import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  authors: any;

  constructor(private _httpService: HttpService) { }


  ngOnInit() {
    this.displayAuthors()
  }

  displayAuthors(){
    this._httpService.getAuthors().subscribe(data=>{
      console.log('Display all authors!', data)
      this.authors = data
    })
  }

  Delete(authorId){
    this._httpService.deleteAuthor(authorId).subscribe(data=>{
      console.log('Deleted Author', data)
      this.displayAuthors() 
    })
  }

  

}
