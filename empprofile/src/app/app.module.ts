import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmplistComponent } from './component/emplist/emplist.component';
import { HeaderComponent } from './component/header/header.component';
import { NotapageComponent } from './component/notapage/notapage.component';
import { HomeComponent } from './component/home/home.component';
import { AddemployeeComponent } from './component/addemployee/addemployee.component';
import { HttpClientModule } from "@angular/common/http";
import { EmpCardComponent } from './component/emp-card/emp-card.component';
import { AddtaskComponent } from './component/addtask/addtask.component';
import { AllTaskComponent } from './component/all-task/all-task.component';
import { EmpDetailsComponent } from './component/emp-details/emp-details.component';
import { FilterPipe } from './shared/filter.pipe';
import { EnddatePipe } from './shared/enddate.pipe';
import { AlertModule } from 'ngx-bootstrap/alert';


@NgModule({
  declarations: [
    AppComponent,
    EmplistComponent,
    HeaderComponent,
    NotapageComponent,
    HomeComponent,
    AddemployeeComponent,
    EmpCardComponent,
    AddtaskComponent,
    AllTaskComponent,
    EmpDetailsComponent,
    FilterPipe,
    EnddatePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AlertModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
