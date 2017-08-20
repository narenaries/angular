import { Component, OnInit } from "@angular/core";

@Component ({
    selector: 'product-app', //html tag
    templateUrl: 'app.component.html' //view
})
export class AppComponent implements OnInit{
    title:string = "Product App";
    //view is not created during costructer call
    constructor(){

    }
    // called after the view is hosted in browser
    ngOnInit(){

    }
}