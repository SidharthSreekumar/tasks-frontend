import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TaskitemComponent } from './components/taskitem/taskitem.component';

@NgModule({
  declarations: [DashboardComponent, SidebarComponent, TaskitemComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
