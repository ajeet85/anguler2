import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding-aj',
  templateUrl: './databinding-aj.component.html',
  styleUrls: ['./databinding-aj.component.css']
})
export class DatabindingAjComponent implements OnInit {
    a=1;
    b=2;
    c;
    math=12;
    company;
 
  constructor() { 
     this.c=this.a+ this.b;
     this.math=this.a* this.b;
     //alert(math);
     this.company='abc';


  }

  ngOnInit() {
  
   //this.company='avccxc';
  }
 
  abc(y){

  
      alert('abc');
      alert(this.math);
  }
  abcm(){
     alert('sasasasa');
  }

}
