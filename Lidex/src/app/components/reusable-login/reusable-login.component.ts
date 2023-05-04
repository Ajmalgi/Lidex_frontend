import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-reusable-login',
  templateUrl: './reusable-login.component.html',
  styleUrls: ['./reusable-login.component.css']
})
export class ReusableLoginComponent {

  @Input() employType: string = ""
  
  @Output() emiter = new EventEmitter()

  submit(formdata : any){
  this.emiter.emit(formdata)
  
  }

}
