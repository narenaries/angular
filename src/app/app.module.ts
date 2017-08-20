import  { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from "./shared/shared.module";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    imports:[
        BrowserModule,
        SharedModule
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
    ]
})
export class AppModule{

}