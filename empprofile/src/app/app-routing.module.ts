import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './component/addemployee/addemployee.component';
import { AddtaskComponent } from './component/addtask/addtask.component';
import { AllTaskComponent } from './component/all-task/all-task.component';
import { EmpCardComponent } from './component/emp-card/emp-card.component';
import { EmpDetailsComponent } from './component/emp-details/emp-details.component';
import { EmplistComponent } from './component/emplist/emplist.component';
import { HomeComponent } from './component/home/home.component';
import { NotapageComponent } from './component/notapage/notapage.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'employeelist',
    component: AddemployeeComponent,
  },
  { path: 'employeelist/:id', component: EmpDetailsComponent },
  {
    path: 'emplist', component: EmplistComponent
  },
  {
    path: 'empcard', component: EmpCardComponent
  },

  {
    path: 'addtask', component: AddtaskComponent
  },
  { path: 'addtask/:id', component: AddtaskComponent },

  {
    path: 'alltask', component: AllTaskComponent
  },
  {
    path: "**", component: NotapageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
