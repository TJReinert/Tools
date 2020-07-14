import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SalaryBandComponent} from '../salary-band/salary-band.component';
import {DashboardComponent} from '../dashboard/dashboard.component';

const BASE = '';
const SALARY_BAND = 'salary-band';

const routes: Routes = [
  {
    path: BASE,
    component: DashboardComponent,
  },
  {
    path: SALARY_BAND,
    component: SalaryBandComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
