import { Directive, Input, OnInit, ElementRef, Renderer, HostListener } from "@angular/core";

@Directive({
    selector: "[highlight]"
})

export class HighlightDirective implements OnInit{
    @Input()
    color: string = "red";
    ngOnInit(): void {
        //this.setColor(this.color);
    }
    //Dependency injection
    constructor(private element:ElementRef,
                private renderer:Renderer) {
    }
    @HostListener("mouseenter")
    onMouserEnter(){
        this.setColor(this.color);
    }

    @HostListener("mouseleave")
    onMouserLeave(){
        this.setColor("");
    }
    setColor(bgColor:string){
        this.renderer.setElementStyle(this.element.nativeElement, "background", bgColor);
    }
}