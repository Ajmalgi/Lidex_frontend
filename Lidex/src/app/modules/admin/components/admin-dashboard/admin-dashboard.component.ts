import { Component } from '@angular/core';
import { AdminService } from '../../admin-service/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
details:any;

constructor(private adminservice:AdminService){}

ngOnInit(){

  this.adminservice.admin_dashboard().subscribe((res:{details:any})=>{
    console.log(res.details)
    this.details = res.details
  })
  
}



}
