import { ChangeDetectorRef, Component } from '@angular/core';
import {  AbstractControl, AsyncValidatorFn, FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { Observable, catchError, map, of } from 'rxjs';
import { CheckemailService } from 'src/app/common-services/checkemail.service';
import { ComService } from 'src/app/common-services/com.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  msg:any;
  status:any;
  email:any;
  email_msg:any;
constructor(private service:ComService , private emailservice:CheckemailService){}

  sign_up = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      asyncValidators: [this.checkEmailExists()],
      
    }),
    phone: new FormControl('', [Validators.required,Validators.pattern(/^\d{10}$/)]),
    employ_type: new FormControl('', Validators.required)
  });

  

  submit(){
    console.log(this.sign_up.value)

    this.service.sign_up(this.sign_up.value).subscribe((res:{statuscode:any,message:any})=>{
      console.log(res.statuscode)
      console.log(res.message)
      this.status = res.statuscode
      this.msg = res.message
      setTimeout(() => {
        this.msg = ''
      }, 3000); 
      this.sign_up.reset()
    })
  }
  checkEmailExists(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      const email = control.value;
      return this.emailservice.email_check(email).pipe(
        map(res => {
          if (res === true) {
            return { emailExists: true };
          } else {
            return null;
          }
        }),
        catchError(() => of(null))
      );
    };
  }
  
  
  
  
 
  
}
