import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService {

  constructor() { }

  gettoken(){
    return !! localStorage.getItem('admin_token');
  }
}

