import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  fetchCurenctValue() {
    console.log(this.http.get('https://api.exchangeratesapi.io/latest'));
    return this.http.get('https://api.exchangeratesapi.io/latest')
  }
}
