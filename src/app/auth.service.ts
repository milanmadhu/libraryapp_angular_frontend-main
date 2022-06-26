import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  userSignUp(user){
    return this.http.post('Http://localhost:3000/signup',user);
  }

  userLogin(user:any){
    console.log(user);
    return this.http.post<any>('http://localhost:3000/login',user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
