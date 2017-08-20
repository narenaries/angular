import {Routes} from '@angular/router';
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductSearchComponent } from "./components/product-search/product-search.component";
import { ProductEditComponent } from "./components/product-edit/product-edit.component";
import { ProductHomeComponent } from "./components/product-home/product-home.component";

export const routes:Routes = [
    {
        path: '',
        component: ProductHomeComponent,
        children: [
            {
                path: 'list',
                component: ProductListComponent,
            },
            {
                path: 'create',
                component: ProductEditComponent,
            },
            {
                path: 'edit/:id',
                component: ProductEditComponent,
            },
            {
                path: 'search',
                component: ProductSearchComponent,
            }

        ]

    }

]