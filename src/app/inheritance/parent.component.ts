import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

   company: string;
  constructor() { }

  ngOnInit() {
  }
  Greet() {
    alert('Hi, From Parent function is written in parrent component!');
  }
  
  Message() {
    alert('Hi we run this , From Parent class !');
  }

}
