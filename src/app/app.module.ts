import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ErrorComponent } from './components/error/error.component';
import {NgOptimizedImage} from "@angular/common";
import { ProductsListComponent } from './components/produts-list/products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ErrorComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
