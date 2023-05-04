import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { LeaveFormComponent } from './components/leave-form/leave-form.component';
import { UserNavbarComponent } from './components/user-navbar/user-navbar.component';
import { UserFooterComponent } from './components/user-footer/user-footer.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewLeaveComponent } from './components/view-leave/view-leave.component';


@NgModule({
  declarations: [
    UserComponent,
    LeaveFormComponent,
    UserNavbarComponent,
    UserFooterComponent,
    UserHomeComponent,
    ViewLeaveComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserModule { }
