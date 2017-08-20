import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LikeService } from "../shared/like.service";

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  address: any; //
  contactLikes:number = 500;

  @ViewChild("para1")
  para1 : ElementRef;

  constructor(private likeServices:LikeService) {
    console.log("contact component is created");
   }

  ngOnInit() {
    this.para1.nativeElement.textContent ="From TS File";
  }

}
