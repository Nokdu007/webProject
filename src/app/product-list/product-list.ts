import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToKHRPipe } from "../toKHR/to-khr-pipe";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [ToKHRPipe, RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  @Input() products: any;
  @Output() onAddToCart: EventEmitter<any> = new EventEmitter();

  AddToCart(product: any) {
    console.log("Product added to cart:", product);
    this.onAddToCart.emit(product);
  }
}


