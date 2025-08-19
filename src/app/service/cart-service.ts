import { Injectable, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart_Item: any[] = [];
  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart_Item));
  }
  constructor() {
    const cartData = localStorage.getItem('cart');
    this.cart_Item = cartData ? JSON.parse(cartData) : [];
  }
  onAddToCart(product: any) {
    const newProduct = { ...product, qty: 1, is_selected: true };

    localStorage.setItem('cart', JSON.stringify(this.cart_Item));
    const existingItem = this.cart_Item.find(item => item.id === newProduct.id);
    if (existingItem) {
      existingItem.qty += 1;
    } else {
      this.cart_Item.push(newProduct);
    }
    this.saveCart();
  }
  getCartItems() {
    return this.cart_Item;
  }

  updateQty(productId: any, qty: number) {
    const item = this.cart_Item.find(p => p.id === productId);
    if (item) {
      item.qty = qty > 0 ? qty : 1; // prevent zero or negative
      this.saveCart();
    }
  }
  removeFromCart(productId: any) {
    if (confirm("Are you sure you want to remove this item from the cart?")) {
      this.cart_Item = this.cart_Item.filter(item => item.id !== productId);
      this.saveCart();
    }
  }
  getTotal() {
    return this.cart_Item.reduce((acc, item) => acc + item.price * item.qty, 0);
  }
  removePurchasedItems(ids: any[]) {
    this.cart_Item = this.cart_Item.filter(item => !ids.includes(item.id));
    this.saveCart();
  }
  getTotalSelected() {
    return this.cart_Item
      .filter(item => item.is_selected && item.qty > 0)
      .reduce((sum, item) => sum + (item.price * item.qty), 0);
  }
}

