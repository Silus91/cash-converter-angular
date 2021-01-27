import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  fetchCurenctValue() {
    return this.http.get('https://api.exchangeratesapi.io/latest');
  }
}
