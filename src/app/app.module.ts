import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Aboutus1Component } from './aboutus1/aboutus1.component';
import { DatabindingAjComponent } from './databinding-aj/databinding-aj.component';
import { MyPipesComponent } from './my-pipes/my-pipes.component';
import { ReversePipe } from './reverse.pipe';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { ParentComponent } from './inheritance/parent.component';
import { ChildComponent } from './inheritance/child.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,
    Aboutus1Component,
    DatabindingAjComponent,
    MyPipesComponent,
    ReversePipe,
    ParentComponent,
    ChildComponent,
   
   

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
