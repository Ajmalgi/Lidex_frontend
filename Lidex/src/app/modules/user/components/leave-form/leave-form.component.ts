import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LeaveServiceService } from '../../user-services/leave-service.service';

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.css']
})
export class LeaveFormComponent {
  msg:any;
  status:any;
  userid :any;
  formData:any;
  
  constructor(private leaveservice:LeaveServiceService){}
  

  leaveForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    leaveFromDate: new FormControl('', Validators.required),
    leaveToDate: new FormControl('', Validators.required),
    reasonForLeave: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    leaveType: new FormControl('',Validators.required),
    userid: new FormControl('')
    

  });
  
  submit(){
    const formData = {
      firstName: this.leaveForm?.get('firstName')?.value ?? '',
      lastName: this.leaveForm?.get('lastName')?.value ?? '',
      leaveFromDate: this.leaveForm?.get('leaveFromDate')?.value ?? '',
      leaveToDate: this.leaveForm?.get('leaveToDate')?.value ?? '',
      reasonForLeave: this.leaveForm?.get('reasonForLeave')?.value ?? '',
      gender: this.leaveForm.get('gender')?.value ?? '',
      leaveType: this.leaveForm.get('leaveType')?.value??'',
      userid: localStorage.getItem('user_token'),
    };

    this.leaveservice.leaverequest(JSON.stringify(formData)).subscribe((res:{statuscode:number,message:string})=>
    {
    console.log(res)
    if(res.statuscode==200){
      this.msg = res.message
      this.status=200
    }
    
    
  })
  setTimeout(() => {
    this.leaveForm.reset()
    this.msg = ''
  }, 3000); 
  this.leaveForm.reset()

  
    
  }
}
