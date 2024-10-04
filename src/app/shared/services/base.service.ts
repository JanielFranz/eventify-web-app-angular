import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';
import {catchError, Observable, retry, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService <T> {

  protected httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  protected basePath: string =`${environment.serverBasePath}`

  protected resourceEndPoint: string =  '/resources'

  constructor(protected http: HttpClient) {}

  protected handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.log(`An error occurred: ${ error.error.message }`);
    } else {
      console.log(`Backend returned code ${error.status}, body was ${error.error}`);
    }
    return throwError(() => new Error('Something bad happened, please try again later'));
  }

  protected resourcePath() : string {
    return `${this.basePath}${this.resourceEndPoint}`;
  }

  public create(item: any): Observable<T> {
    return this.http.post<T>(this.resourcePath(), JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }

  public delete (id: any): Observable<any> {
    return this.http.delete(`${this.resourcePath()}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  public update(id: any, item:any): Observable<T> {
    return this.http.put<T>(`${this.resourcePath()}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  public getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.resourcePath(), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  public getById(id: any): Observable<T> {
    return this.http.get<T>(`{this.resourcePath()}/${id}`, this.httpOptions)
  }


}
