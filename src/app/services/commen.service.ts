import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommenService {

  constructor(private http: HttpClient) { }



  // fakedata(dummy:any){
  //   console.log("dummydata",dummy)
  //   return this.http.get("https://jsonplaceholder.typicode.com/posts")
  // }





  getwolddata() {
    return this.http.get("https://covid19.mathdro.id/api")
  }


  getwolddatabyname(country: any) {
    return this.http.get("https://covid19.mathdro.id/api/countries/" + country)
  }




}


// https://covid19.mathdro.id/api

//https://covid19.mathdro.id/api/countries/india