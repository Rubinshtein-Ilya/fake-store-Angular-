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

  readonly baseUrl:string = 'https://fakestoreapi.com/products';
  limit:number = 6;
  id:number = 1;

  getAllProducts():Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}`, {
      params: new HttpParams({
        fromString: `limit=${this.limit}`
      })
    }).pipe(
      retry(2),
      catchError(this.errorHandler.bind(this))
    )
  }


  addNewCard():Observable<Product[]>{

    this.limit += 6;

    return this.http.get<Product[]>(`${this.baseUrl}`, {
      params: new HttpParams({
        fromString: `limit=${this.limit}`
      })
    }).pipe(
      retry(2),
      catchError(this.errorHandler.bind(this))
    )
  }

  getSingleCard(id:number){
    return this.http.get<Product>(`${this.baseUrl}/${id}`).pipe(
      retry(2),
      catchError(this.errorHandler.bind(this))
    )
  }

  private errorHandler(error: HttpErrorResponse){
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }

}


