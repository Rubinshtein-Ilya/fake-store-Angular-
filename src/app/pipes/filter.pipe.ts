import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../models/product-model";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: Product[], search: string): Product[]{
    return products.filter( p => p.title.toLowerCase().includes(
      search.toLowerCase()
    ))
  }

}
