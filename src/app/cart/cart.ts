import { Component } from '@angular/core';
import { CartService } from '../service/cart-service';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {

  totalPrice = 0;
  totalQty = 0;
  showInvoice = false;
  selectedProducts: any[] = [];
  constructor(public cartService: CartService) {

  }

  hasSelectedItems(): boolean {
    return this.cartService.getCartItems().some(item => item.is_selected && item.qty > 0);
  }
  getTotal() {
    return this.selectedProducts.reduce((sum, item) => sum + item.qty * item.price, 0);
  }

  updateTotal() {
    this.totalPrice = this.cartService.getCartItems()
      .filter(item => item.is_selected)
      .reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  openInvoice() {
    this.selectedProducts = this.cartService.getCartItems().filter(item => item.is_selected && item.qty > 0);
    this.showInvoice = this.selectedProducts.length > 0;
  }
  payInvoice() {
    // Here you can trigger payment API or just alert
    alert('Payment successful! Total: ' + this.getTotal());
    this.showInvoice = false;
    // optionally clear selected items or reduce stock
  }

  closeInvoice() {
    this.showInvoice = false;
  }
}
