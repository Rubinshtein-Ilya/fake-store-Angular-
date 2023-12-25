import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../models/product-model";

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss'
})
export class SingleProductComponent implements OnInit{
  product: Product;
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getSingleCard(1).subscribe( product => {
      this.product = product
      console.log(product)
    })
  }


}
