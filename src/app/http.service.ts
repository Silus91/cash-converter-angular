import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LatestExchangeResponse } from './types/exchangeRateApi';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  fetchCurenctValue() {
    return this.http.get<LatestExchangeResponse>('https://api.exchangeratesapi.io/latest');
  }

  fetchCurrencyValues(customFetchDataRequest:string) {
    return this.http.get(customFetchDataRequest);
  }
  //przerobic z tego 


}
