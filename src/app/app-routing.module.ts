import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsListComponent} from "./components/produts-list/products-list.component";
import {SingleProductComponent} from "./components/single-product/single-product.component";

const routes: Routes = [
  {path: '', component: ProductsListComponent},
  {path: 'card/:id', component: SingleProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
