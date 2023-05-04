import { Component } from '@angular/core';
import { AdminService } from '../../admin-service/admin.service';

@Component({
  selector: 'app-view-all-leave',
  templateUrl: './view-all-leave.component.html',
  styleUrls: ['./view-all-leave.component.css']
})
export class ViewAllLeaveComponent {
  all_leave:any;

  constructor(private adminservice:AdminService){

    this.adminservice.view_all_leave().subscribe((res:{statuscode:any,'details':any})=>
    {console.log(res.details)
     this.all_leave = res.details
     
    }
    )



  }

}
