import { Component } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {
  employ_name:any;

  ngOnInit(){

    this. employ_name = localStorage.getItem('user_name')
  }



}
