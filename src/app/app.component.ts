import {Component, OnInit} from '@angular/core';
import {Product} from "./models/product-model";
import {ProductsService} from "./services/products.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  constructor(private productsService: ProductsService) {}

  title: string = 'fake store';
  loading: boolean = false;
  btnLoading: boolean = false;
  products: Product[] = [];
  isDisabled: boolean = false


  ngOnInit(){
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



