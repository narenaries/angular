import { NgModule } from "@angular/core";
import { RouterModule} from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from "./shared/shared.module";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { routes } from './app.routing';
//import { ProductModule } from "./product/product.module";
import { environment } from "../environments/environment";
import {LocationStrategy, HashLocationStrategy, PathLocationStrategy} from "@angular/common";
import { AuthModule } from "./auth/auth.module";

console.log("Environment: ", environment);

//ng serve (environment.ts)
//ng build --prod environment.prod.ts
@NgModule({
    imports:[
        BrowserModule,
        SharedModule,
        RouterModule.forRoot(routes),
        AuthModule
        //ProductModule
    ],

    declarations: [
        //prior module dependencies
        AppComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        HeaderComponent,
        FooterComponent
    ],
    bootstrap: [
        AppComponent //better to have one component
        //ChatAppComponent
    ],
    providers:[
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        {
            provide: "apiEndPoint",
            useValue: environment.apiEndPoint
        }
    ]
})
export class AppModule{

}