import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){
    this.getCakes();
  }

  addCake(cakeform){
    return this._http.post('/cakes',cakeform)
  }

  getCakes(){
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get('/cakes');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("Got our Cakes!", data));
    return this._http.get('/cakes')
  }

  deleteCake(cakeId){
    return this._http.delete('/cakes/' + cakeId);
  }
  
  addReview(reviewForm, cakes){
    console.log('review form', reviewForm)
    console.log('cakes', cakes)
    return this._http.post(`/review/${cakes}`, reviewForm)
  }

  showOne(id){
    return this._http.get(`/cakes/${id}`);
  }

}
