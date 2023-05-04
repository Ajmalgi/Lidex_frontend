import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComService } from 'src/app/common-services/com.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styles: [
  ]
})
export class UserLoginComponent {
  constructor(private service:ComService,private router:Router){}
 
  logsubmit(formdata : any){
    console.log("working",formdata)

    this.service.user_login(formdata).subscribe((res:{statuscode:number,name:string,user_id:any})=>
    {console.log(res.statuscode)

      if (res.statuscode == 200){
        localStorage.setItem('user_token',res.user_id)
        localStorage.setItem('user_name',res.name)
        this.router.navigate(['user/user_home'])
      }
    })


  }
}
