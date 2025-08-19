import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../service/cart-service';
declare var axios: any;
declare var $: any;

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {
  constructor(private route: ActivatedRoute, public CartService: CartService) { }
  product: any = {};
  onAddToCart(product: any) {
    this.CartService.onAddToCart(product);
    localStorage.setItem('cart', JSON.stringify(this.CartService.getCartItems()));
  }
  ngOnInit() {
    const proId = this.route.snapshot.queryParamMap.get('product_id');
    console.log(proId)

    let ng_this = this;

    axios.get(`https://fakestoreapi.com/products/${proId}`)
      .then(function (response: any) {
        ng_this.product = response.data;
      })
      .catch(function (error: any) {
        // handle error
        console.log(error);
      })
      .finally(function () {

      });

    // Optionally the request above could also be done as
    axios.get('/user', {
      params: {
        ID: 12345
      }
    })
      .then(function (response: any) {
        console.log(response);
      })
      .catch(function (error: any) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

    // Want to use async/await? Add the `async` keyword to your outer function/method.
    async function getUser() {
      try {
        const response = await axios.get('/user?ID=12345');
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }

  }

}
