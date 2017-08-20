import { Component, OnInit } from '@angular/core';
import { LikeService, Message } from "../../shared/like.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  message:Message;
  constructor(private likeService:LikeService) { 

  }

  ngOnInit() {
    this.likeService.likeSubject.subscribe((message:Message) =>{
      //console.log("at footer", message);
      this.message = message;
    });
  }

}
