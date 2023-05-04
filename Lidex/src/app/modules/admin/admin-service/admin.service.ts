import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
   adminUrl = "http://127.0.0.1:8000/lidex_admin/"
  constructor(private http:HttpClient) { }


  view_all_leave():Observable<any>{

    return this.http.get(this.adminUrl+'view_leave')

  }

  pending_leave():Observable<any>{
    return this.http.get(this.adminUrl+'pending_leave')
  }

  approve_or_reject(formdata:any):Observable<any>{
    return this.http.post(this.adminUrl+'approve_or_reject',formdata)
  }

  admin_dashboard():Observable<any>{
    return this.http.get(this.adminUrl+'admin_dashboard')
  }
}
