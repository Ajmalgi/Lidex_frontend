import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ViewAllLeaveComponent } from './components/view-all-leave/view-all-leave.component';
import { ApproveOrRejectComponent } from './components/approve-or-reject/approve-or-reject.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ViewAllLeaveComponent,
    ApproveOrRejectComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
