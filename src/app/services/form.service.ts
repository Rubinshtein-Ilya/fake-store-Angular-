import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, Observable, retry, throwError} from 'rxjs';
import {AuthRequestModel, RegistrationRequestModel} from '../models/form-request-model';
import {ErrorService} from "./error.service";

@Injectable({
  providedIn: 'root'
})
export class FormService {
  readonly baseUrl:string = 'https://fakestoreapi.com/user';
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
  constructor(private http: HttpClient, private errorService: ErrorService) { }

  registerUser(formData: RegistrationRequestModel): Observable<RegistrationRequestModel> {
    return this.http.post<RegistrationRequestModel>(`${this.baseUrl}/register`, formData, this.httpOptions).pipe(
      retry(2),
      catchError(this.errorHandler.bind(this))
    )
  }

  loginUser(formData: AuthRequestModel): Observable<AuthRequestModel> {
    return this.http.post<AuthRequestModel>(`${this.baseUrl}/register`, formData, this.httpOptions).pipe(
      retry(2),
      catchError(this.errorHandler.bind(this))
    )
  }

  private errorHandler(error: HttpErrorResponse){
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
