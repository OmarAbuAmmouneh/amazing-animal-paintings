import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  prodcuts: Product[] = [];

  constructor(private prodcutService: ProductService) {

  }

  ngOnInit(): void {
    this.prodcutService.getProdcuts().subscribe(data => {
      this.prodcuts = data;
    })
  }
}
