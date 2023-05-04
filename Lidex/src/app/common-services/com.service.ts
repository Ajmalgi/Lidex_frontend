import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComService {
  commonUrl = 'http://127.0.0.1:8000/common/'
  constructor(private http:HttpClient) { }


 sign_up(formdata:any):Observable<any>{
    return this.http.post(this.commonUrl+'sign_up',formdata)
  }

  admin_login(formdata:any):Observable<any>{
    return this.http.post(this.commonUrl+'admin_login',formdata)
  }

  user_login(formdata:any):Observable<any>{
    return this.http.post(this.commonUrl+'user_login',formdata)
  }
}
