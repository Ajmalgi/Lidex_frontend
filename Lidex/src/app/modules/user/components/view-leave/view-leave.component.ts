import { Component } from '@angular/core';
import { LeaveServiceService } from '../../user-services/leave-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-leave',
  templateUrl: './view-leave.component.html',
  styleUrls: ['./view-leave.component.css']
})

export class ViewLeaveComponent {
  userid:any;
  leave_data:any;
  msg:any;
  leavestatus:any;
  statuscode:any;
  
  constructor(private leaveservice:LeaveServiceService){}
  subbtn = true
  inptag = true

  btnedit(){
    
      this.subbtn=false
      this.inptag=false     
      
 }

 show_modal=false
 modal(){
   if (this.show_modal ==false){
     this.show_modal = true
   }
  
   }
   modalcancel(){
    this.show_modal = false
   }

 
 leave_edit = new FormGroup({
  firstName: new FormControl('', Validators.required),
  lastName: new FormControl('', Validators.required),
  leaveFromDate: new FormControl('', Validators.required),
  leaveToDate: new FormControl('', Validators.required),
  reasonForLeave: new FormControl('', Validators.required),
  gender: new FormControl('', Validators.required),
  leaveType: new FormControl('',Validators.required),
  userid: new FormControl('')
  

});



ngOnInit() {
  this.userid = localStorage.getItem('user_token');

  this.leaveservice.view_leave(this.userid).subscribe(
    (res: { statuscode: number; details: any }) => {
      this.leave_data = res.details;
      console.log(res.details);
      


      this.leave_edit.patchValue({
        firstName: this.leave_data.firstName,
        lastName: this.leave_data.lastName,
        leaveFromDate: this.leave_data.leaveFromDate,
        leaveToDate: this.leave_data.leaveToDate,
        reasonForLeave: this.leave_data.reasonForLeave,
        gender: this.leave_data.gender,
        leaveType: this.leave_data.leaveType,
        userid: this.leave_data.userid
      });
    }
  );



}




  submit(){
   
    console.log(this.leave_edit.value)
    this.leaveservice.edit_leave(this.leave_edit.value).subscribe((res:{'statuscode':number,message:string})=>
    {console.log(res)
        this.statuscode = 200
        this.msg = res.message
         

        setTimeout(() => {
          this.msg = ''
          location.reload()
        }, 2000); 

      
      
    })

    
    
  }

 

    delete_leave(){
      console.log('hello')
      this.leaveservice.delete_leave(this.userid).subscribe((res:{'statuscode':200})=>{
        console.log(res.statuscode)
        if (res.statuscode==200){
          location.reload()
        }
      })

    }

  


}
