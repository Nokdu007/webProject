import { Component } from '@angular/core';
import { ProductList } from "../product-list/product-list";
import { RouterLink } from '@angular/router';
import { Productsslider } from '../productsslider/productsslider';
import { CartService } from '../service/cart-service';
import { ProductService } from '../service/product-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductList, RouterLink, Productsslider],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  constructor(public cartService: CartService, public productService: ProductService) { }
  onAddToCart(product: any) {
    this.cartService.onAddToCart(product);
    localStorage.setItem('cart', JSON.stringify(this.cartService.getCartItems()));
  }
}



