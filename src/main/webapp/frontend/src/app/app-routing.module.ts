import { NotificationComponent } from './notification/notification.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TermsComponent } from './terms/terms.component';
import { SetupAmountComponent } from './setup-amount/setup-amount.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'settings', component: SetupAmountComponent},
  { path: 'terms', component: TermsComponent},
<<<<<<< HEAD
  { path: 'notifications', component: NotificationComponent}
=======
  { path: 'notification', component: NotificationComponent}
>>>>>>> 79482deaa9b0a79b42268b0ec64229f0104ff4e6
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
