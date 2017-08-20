import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  members: string[] = ['member1','member2','member3'];
  show: boolean = true;
  startDate:Date = new Date();

  constructor() { }
  
  toggle(event: Event){
    this.show = !this.show;
    console.log(event);
  }

  ngOnInit() {
  }

  onEnter(){
    console.log("mouse enter...");
  }
}
