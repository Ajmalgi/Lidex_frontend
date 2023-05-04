import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ViewAllLeaveComponent } from './components/view-all-leave/view-all-leave.component';
import { ApproveOrRejectComponent } from './components/approve-or-reject/approve-or-reject.component';

const routes: Routes = [{ path: '', component: AdminComponent,
children: [
  {  path: '', redirectTo: 'admin-dashboard', pathMatch: 'full' },
  { path: 'admin-dashboard', component:AdminDashboardComponent},
  { path: 'view-all-leave', component:ViewAllLeaveComponent},
  { path: 'pending-requests', component:ApproveOrRejectComponent},
  
 

]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
