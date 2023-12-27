import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../models/product-model";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit{
  constructor(private productsService: ProductsService) {}

  loading: boolean = false;
  btnLoading: boolean = false;
  products: Product[] = [];
  isDisabled: boolean = false;
  term: string = '';

  ngOnInit(): void {
    this.loading = true;
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products
      this.loading = false
    })
  }

  trackByFn( card: any): any{
    return card.id
  }

  addNew( ){
    this.btnLoading = true
    this.productsService.addNewCard().subscribe(products => {
      let limit: number = this.productsService.limit
      this.products = products
      this.btnLoading = false
      limit > this.products.length? this.isDisabled = true: this.isDisabled = false;
    })
  }

}
