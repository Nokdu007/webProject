import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductList } from '../product-list/product-list';
import { CartService } from '../service/cart-service';
import { ProductService } from '../service/product-service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-page-product',
  imports: [ProductList, RouterLink],
  templateUrl: './page-product.html',
  styleUrl: './page-product.css'
})
export class PageProduct {
  constructor(public cartService: CartService, public productService: ProductService) {
  }

  onAddToCart(product: any) {
    this.cartService.onAddToCart(product);
    localStorage.setItem('cart', JSON.stringify(this.cartService.getCartItems()));
  }
}
