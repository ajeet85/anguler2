import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pipes',
  templateUrl: './my-pipes.component.html',
  styleUrls: ['./my-pipes.component.css']
})
export class MyPipesComponent implements OnInit {

employees: any[];
engine:any[];

  constructor() { }

  ngOnInit() {
    this.employees = [{ name: 'Shailendra', address: 'Noida', salary: 12000, joining: new Date() },
    { name: 'Ankit', address: 'Delhi', salary: 10000, joining: new Date() },
    { name: 'Mohan', address: 'Noida', salary: 15000, joining: new Date() },
    { name: 'Rohan', address: 'Gurgaon', salary: 12000, joining: new Date() }];

    this.engine=[{brand:'tata',capcity:'1.2'},{brand:'suziki',capcity:'1.2'},{brand:'bird',capcity:'2.2'}]

   
  }
  

}
