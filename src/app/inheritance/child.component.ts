import { Component, OnInit } from '@angular/core';
import { ParentComponent } from './parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent extends ParentComponent implements OnInit {

  constructor() {
     super();    /* Constructors for derived classes must contain a 'super' call. */
    this.company = 'Dot Net Tricks copy code';
  }

  ngOnInit() {
  }
   messgae_child(){
       alert('message run from child');
   }
}
