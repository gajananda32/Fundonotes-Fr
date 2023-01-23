import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }
  register(data:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    };
   // console.log("print------------",data)
    return this.httpService.postService("/users/register",data,false,header)
  }
  login(data:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    };
    return this.httpService.postService("/users/loginuser",data,false,header)
  }
  forgotpassword(data:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    };
    return this.httpService.postService("/users/forgottpassword",data,false,header)
  }
  resetpassword(data:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    };
    return this.httpService.postService("/users/resetpassword",data,false,header)
  }
}
