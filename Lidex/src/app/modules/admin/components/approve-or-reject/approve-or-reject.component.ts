import { Component } from '@angular/core';
import { AdminService } from '../../admin-service/admin.service';

@Component({
  selector: 'app-approve-or-reject',
  templateUrl: './approve-or-reject.component.html',
  styleUrls: ['./approve-or-reject.component.css']
})
export class ApproveOrRejectComponent {
  pending_leave:any;
  constructor(private adminservice:AdminService){


    this.adminservice.pending_leave().subscribe((res:{statuscode:number,details:any})=>
    {console.log(res.details)
      this.pending_leave = res.details
    })
  }

  submit(ustatus:string,leavId:any){
    const formdata = new FormData
    formdata.append('ustatus',ustatus)
    formdata.append('leaveId',leavId)
    this.adminservice.approve_or_reject(formdata).subscribe((res:{statuscode:number,details:any})=>
    {console.log(res)})

    this.pending_leave = this.pending_leave.map((leave:any) => {
      if (leave._id == leavId) {
        leave.status = ustatus;
      }
      return leave;
    });
    

 

     

    }

  }

