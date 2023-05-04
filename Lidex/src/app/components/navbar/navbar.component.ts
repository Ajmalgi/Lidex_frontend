import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  show_div=false
  disp(){
    if (this.show_div ==false){
      this.show_div = true
    }
    else{
      this.show_div = false
    }

    }

}
