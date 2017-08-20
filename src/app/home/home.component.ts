import { Component, OnInit } from '@angular/core';
import { LikeService, Message } from "../shared/like.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  homeLikes: number=0;
  constructor(private likeServices:LikeService) {
    console.log("home component is created");
   }

  ngOnInit() {
    this.homeLikes = this.likeServices.homeLikes;
    this.likeServices.likeSubject.subscribe((message:Message) =>{
      //console.log("at footer", message);
      this.homeLikes = message.likes;
    });
    
    setInterval( ()=>{
      //this.homeLikes += 10
      this.likeServices.homeLikes += 10;
    }, 3000);
  }

}
