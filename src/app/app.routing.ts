import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { Aboutus1Component } from './aboutus1/aboutus1.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DatabindingAjComponent } from './databinding-aj/databinding-aj.component';
import { MyPipesComponent } from './my-pipes/my-pipes.component';
import { ParentComponent } from './inheritance/parent.component';
import { ChildComponent } from './inheritance/child.component';



const routes: Routes = [
    { path: '', redirectTo: 'title', pathMatch: 'full' },
    { path: 'contatcus', component: ContactusComponent },
    { path: 'aboutus1/:id/:name', component: Aboutus1Component},
     
     { path: 'aboutus', component: AboutusComponent},
      { path: 'databind', component: DatabindingAjComponent},
      { path: 'my-pipes', component: MyPipesComponent},
	  { path: 'inheritance', component: ChildComponent}
     
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
