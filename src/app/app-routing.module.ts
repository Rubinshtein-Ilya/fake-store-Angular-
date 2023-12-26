import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsListComponent} from "./components/produts-list/products-list.component";
import {SingleProductComponent} from "./components/single-product/single-product.component";
import {RegistrationFormComponent} from "./components/registration-form/registration-form.component";
import {AuthFormComponent} from "./components/auth-form/auth-form.component";

const routes: Routes = [
  {path: '', component: ProductsListComponent},
  {path: 'card/:id', component: SingleProductComponent},
  {path: 'registration', component: RegistrationFormComponent},
  {path: 'login', component: AuthFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
