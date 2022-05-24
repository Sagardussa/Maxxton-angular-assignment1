import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './component/addemployee/addemployee.component';
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
    path: 'addemployee',
    component: AddemployeeComponent,
  },
  {
    path: 'emp', component: EmplistComponent
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
