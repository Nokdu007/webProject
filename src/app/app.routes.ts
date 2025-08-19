import { Routes } from '@angular/router';
import { Cart } from './cart/cart';
import { Home } from './home/home';
import { PageProduct } from './page-product/page-product';
import { ProductDetail } from './product-detail/product-detail';
export const routes: Routes = [
    { path: 'cart', component: Cart },
    { path: '', component: Home },
    { path: 'page-product', component: PageProduct },
    { path: 'product-detail', component: ProductDetail }
];
