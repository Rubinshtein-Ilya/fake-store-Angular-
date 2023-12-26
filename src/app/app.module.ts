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
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AuthFormComponent } from './components/auth-form/auth-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ErrorComponent,
    ProductsListComponent,
    SingleProductComponent,
    RegistrationFormComponent,
    AuthFormComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgOptimizedImage,
        RouterModule.forRoot([]),
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
