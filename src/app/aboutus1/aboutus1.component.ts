import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-aboutus1',
  templateUrl: './aboutus1.component.html',
  styleUrls: ['./aboutus1.component.css']
})
export class Aboutus1Component implements OnInit {
id: string;
  name: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  this.route.params.subscribe((params) => {
      this.id = params.id;
      this.name = params.name;
    });
  }

}



