import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeComponent } from './like/like.component';
import { HighlightDirective } from "./highlight.directive";
import { PowerPipe } from "./power.pipe";
import { LikeService } from "./like.service";

@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [LikeComponent, 
              HighlightDirective,
              PowerPipe],

  exports: [LikeComponent, 
              HighlightDirective,
              PowerPipe],

  providers:[
    LikeService
  ]
})
export class SharedModule { }
