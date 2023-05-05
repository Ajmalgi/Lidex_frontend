import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ViewAllLeaveComponent } from './components/view-all-leave/view-all-leave.component';
import { ApproveOrRejectComponent } from './components/approve-or-reject/approve-or-reject.component';
import { adminGuard } from './adminauth-guard/admin.guard';

const routes: Routes = [{ path: '', component: AdminComponent,
children: [
  {  path: '', redirectTo: 'admin-dashboard', pathMatch: 'full' },
  { path: 'admin-dashboard', component:AdminDashboardComponent,canActivate:[adminGuard]},
  { path: 'view-all-leave', component:ViewAllLeaveComponent,canActivate:[adminGuard]},
  { path: 'pending-requests', component:ApproveOrRejectComponent,canActivate:[adminGuard]},
  
 

]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
