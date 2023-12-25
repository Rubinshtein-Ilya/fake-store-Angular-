import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Product} from "../models/product-model";
import {ErrorService} from "./error.service";

@Injectable({
  providedIn: "root"
})

export class ProductsService{
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {}

  getAllProducts():Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products', {
      params: new HttpParams({
        fromString: "limit=6"
      })
    }).pipe(
      retry(2),
      catchError(this.errorHandler.bind(this))
    )
  }

  private errorHandler(error: HttpErrorResponse){
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }

}
