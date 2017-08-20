import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  constructor() { }

  @Input()
  count: number = 0;

  @Input("like-title")
  title: string = '';

  //For 2 way bindnig outpust mmust be 
  @Output()
  countChange:EventEmitter<number> = new EventEmitter();
  

  ngOnInit() {
  }

  step(value:number){
    //child to parent and must be event
    this.countChange.emit(this.count + value);
  }
}
