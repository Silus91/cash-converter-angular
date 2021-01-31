import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HistoricExchangeResponse, LatestExchangeResponse, Rates } from '../types/exchangeRateApi';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  private baseUrl = 'https://api.exchangeratesapi.io';
  public historicRates:  Record<string, Rates> = {};
  public baseCurrency: string|null = null;
  public latestRate: Rates|null = null;
  public toCurrency: string|null =null;
  public amount: number = 0;

  constructor(private http: HttpClient) { }

  fetchLatestRates() {
    return this.http.get<LatestExchangeResponse>(`${this.baseUrl}/latest`);
  }

  calculate() {
    return this.amount * Object.values(this.latestRate!)[0];
  }

  fetchHistoricRates(from: string, to: string) {
    this.baseCurrency = from;
    this.http.get<HistoricExchangeResponse>(`${this.baseUrl}/history`, {
      params: {
        start_at: "2020-01-01",
        end_at: "2021-01-29",
        base: from,
        symbols: to
      }
    }).subscribe(({rates}) => {
      this.historicRates = Object.keys(rates).sort().reduce((sortedRates: Record<string, Rates>, date) => {
        sortedRates[date] = rates[date];
        return sortedRates 
      }, {});

      const latestDate = Object.keys(this.historicRates)[Object.keys(this.historicRates).length -1];
      this.latestRate = this.historicRates[latestDate];
      console.log(this.latestRate);
      this.toCurrency = Object.keys(this.latestRate)[0]
    });
  }

}
