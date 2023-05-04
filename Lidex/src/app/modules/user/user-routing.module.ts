import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { LeaveFormComponent } from './components/leave-form/leave-form.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { ViewLeaveComponent } from './components/view-leave/view-leave.component';

const routes: Routes = [{ path: '', component: UserComponent,

children: [
  {  path: '', redirectTo: 'user_home', pathMatch: 'full' },
  { path: 'user_home', component:UserHomeComponent},
  { path: 'leave_form', component:LeaveFormComponent},
  { path: 'view_leave', component:ViewLeaveComponent},
 

]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
