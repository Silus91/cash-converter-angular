import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HistoricExchangeResponse, LatestExchangeResponse, Rates } from '../types/exchangeRateApi';
import { format,subMonths } from 'date-fns'

@Injectable({
  providedIn: 'root'
})

export class ExchangeService {
  private baseUrl = 'https://api.exchangeratesapi.io';
  public historicRates:  Record<string, Rates> = {};
  public baseCurrency: string|null = null;
  public latestRate: Rates|null = null;
  public toCurrency: string|null = null;
  public amount: number = 0;
  public lineChartData: { data: number[] }[] = [];
  public dateToday = format(new Date(), 'yyyy-MM-dd');
  public dateLastMonth =  format(subMonths(new Date(),1), 'yyyy-MM-dd');

  constructor(private http: HttpClient) { }

  fetchLatestRates() {
    return this.http.get<LatestExchangeResponse>(`${this.baseUrl}/latest`);
  }

  calculate() {
    return (this.amount * Object.values(this.latestRate!)[0]).toFixed(8);
  }

  fetchHistoricRates(from: string, to: string) {
    this.baseCurrency = from;
    this.http.get<HistoricExchangeResponse>(`${this.baseUrl}/history`, {
      params: {
        start_at: this.dateLastMonth,
        end_at: this.dateToday,
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
      this.toCurrency = Object.keys(this.latestRate)[0];
      this.lineChartData = [{ data: Object.values(this.historicRates).map(rate => {
        return Object.values(rate)[0];
      })}];
    });
  }
}
