import {Routes} from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";

export const routes:Routes = [
    {
        path: '', //home page  //localhost:4200
        component: HomeComponent
    },
    {
        path: "products",
        loadChildren: './product/product.module#ProductModule'
    },
    {
        path: 'contact', //Contact page
        component: ContactComponent
    },
    {
        path: 'about', //About page
        component: AboutComponent
    }
]