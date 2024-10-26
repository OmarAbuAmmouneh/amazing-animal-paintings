import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [],
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css'
})
export class CartViewComponent implements OnInit {
  cartItems: Product[] = [];

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
      this.cartService.getCartItems().subscribe((data) => {
        this.cartItems = data;
      })
  }
}
