import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Product } from "../../models/product.model";
import { ProductService } from "../../services/product.service";
import "rxjs/add/operator/toPromise";// to convert to promise

@Component({
  selector: 'product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product:Product = {name:''};

  constructor(private productService:ProductService, private route:ActivatedRoute,
              private router: Router) { 
               // throw new Error("Crash...");
  }

  ngOnInit() {
    let id: any = this.route.snapshot.params["id"];
    console.log("id ",id)
    if(id){//edit
        this.productService.getProduct(id)
        .toPromise()
        .then((product:Product) => {
          this.product = product;
        })
    }
  }

  saveProduct(){
    this.productService
    .saveProduct(this.product)
    .subscribe ( (product: Product)=> {
        this.router.navigate(["/products", "list"]);
    })
  }

}
