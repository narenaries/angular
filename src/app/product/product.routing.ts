import {Routes} from '@angular/router';
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductSearchComponent } from "./components/product-search/product-search.component";
import { ProductEditComponent } from "./components/product-edit/product-edit.component";
import { ProductHomeComponent } from "./components/product-home/product-home.component";
import { AuthGuard, AdminGuard } from "../auth/auth.guards";

export const routes:Routes = [
    {
        path: '',
        component: ProductHomeComponent,
        canActivate: [
            AuthGuard
        ],
        children: [
            {
                path: 'list',
                component: ProductListComponent,
            },
            {
                path: 'create',
                component: ProductEditComponent,
                canActivate: [AdminGuard]
            },
            {
                path: 'edit/:id',
                component: ProductEditComponent,
                canActivate: [AdminGuard]
            },
            {
                path: 'search',
                component: ProductSearchComponent,
            }

        ]

    }

]