import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckemailService {
  commonUrl = 'http://127.0.0.1:8000/common/'
  constructor(private http:HttpClient) { }
  formdata = new FormData


  email_check(email:string):Observable<any>{
    this.formdata.append('email',email)
    console.log(this.formdata)
    return this.http.post(this.commonUrl+'email_check',this.formdata)
  }
}
