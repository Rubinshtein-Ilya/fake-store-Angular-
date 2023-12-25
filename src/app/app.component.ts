import {Component, OnInit} from '@angular/core';
import {Product} from "./models/product-model";
import {products as data} from "./data/products-data";
import {ProductsService} from "./services/products.service";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'fake store';
  loading: boolean = false;
  products$: Observable<Product[]>

  constructor(private productsService: ProductsService) {}

  ngOnInit(){
    this.loading = true;
    this.products$ = this.productsService.getAllProducts().pipe(
      tap(() => this.loading = false)
    )
  }
}
