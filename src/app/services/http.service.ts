import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {SubscriptionModel} from '../main/subscription-form/subscription.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private headers: HttpHeaders;
  private uri = 'http://localhost:8080';
  //private uri = 'http://46.101.167.243:8080';
  private params: HttpParams;
  private responseType: string;

  constructor(private http: HttpClient, ) {
    this.headers = new HttpHeaders();
  }

  register(user: SubscriptionModel): Observable<any> {
    return this.http.post(this.uri + '/users/register', user, this.getOptions());
  }

  getOptions(): any {
    this.headers = new HttpHeaders();
    this.headers = this.headers.append('Access-Control-Allow-Origin', '*');
    this.params = new HttpParams();
    this.responseType = 'json';
    return {
      headers: this.headers,
      params: this.params,
      responseType: this.responseType,
      observe: 'response'
    };
  }
}
