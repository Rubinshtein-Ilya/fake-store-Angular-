import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../models/product-model";
import { ActivatedRoute} from "@angular/router";
// import { DataService} from "../../services/data.service.service";

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss'
})
export class SingleProductComponent implements OnInit{
  product: Product;
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const cardId:number = Number(this.route.snapshot.paramMap.get('id'));
    this.productsService.getSingleCard(cardId).subscribe( product => {
      this.product = product
      console.log(product)
    })
  }


}
