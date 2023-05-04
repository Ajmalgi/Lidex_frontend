import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveServiceService {
  formdata = new FormData;
  userUrl = 'http://127.0.0.1:8000/user/'
  constructor(private http:HttpClient){}




  
  leaverequest(formdata:any):Observable<any>{
    return this.http.post(this.userUrl+'leave_form',formdata)

  }

  view_leave(userid:any):Observable<any>{
    
    return this.http.get(this.userUrl+'view_leave/'+userid)
  }

  edit_leave(formdata:any): Observable<any> {

  
    return this.http.post(this.userUrl + 'edit_leave',formdata );
  }

  delete_leave(userid: string): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    const data = { userid };
  
    return this.http.post(this.userUrl + 'delete_leave', data, { headers });
  }
}


