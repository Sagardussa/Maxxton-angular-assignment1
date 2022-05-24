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

@NgModule({
  declarations: [
    AppComponent,
    EmplistComponent,
    HeaderComponent,
    NotapageComponent,
    HomeComponent,
    AddemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
