import { Component } from '@angular/core';
import { ComService } from 'src/app/common-services/com.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styles: [
  ]
})
export class AdminLoginComponent {
  constructor(private service:ComService ){}
  logsubmit(formdata : any){
    console.log(formdata)

    this.service.admin_login(formdata).subscribe((res:{statuscode:number,name:string,admin_id:any})=>
    {console.log(res.statuscode)

      if (res.statuscode == 200){
        localStorage.setItem('admin_token',res.admin_id)
        localStorage.setItem('admin_name',res.name)
      
      }
    })

  }
}
