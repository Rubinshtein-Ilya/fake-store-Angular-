import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ErrorComponent } from './components/error/error.component';
import {NgOptimizedImage} from "@angular/common";
import { ProductsListComponent } from './components/produts-list/products-list.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { PagesComponent } from './components/pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ErrorComponent,
    ProductsListComponent,
    SingleProductComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
