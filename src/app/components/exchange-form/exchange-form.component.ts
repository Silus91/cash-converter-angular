import { Component, OnInit } from '@angular/core';
import { LatestExchangeResponse } from 'src/app/types/exchangeRateApi';
import { HttpService } from '../../http.service';


@Component({
  selector: 'app-exchange-form',
  templateUrl: './exchange-form.component.html',
  styleUrls: ['./exchange-form.component.scss']
})
export class ExchangeFormComponent implements OnInit {

  currencies: string[] = [];
  currencyFrom: string = "GBP";
  currencyTo: string = "PLN";
  amount: number = 1;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.fetchCurenctValue().subscribe(({rates}) => {
      this.currencies = Object.keys(rates);
    })
  }

  onSubmit() {
    // this.customFetchDataRequest = `https://api.exchangeratesapi.io/history?start_at=2020-12-20&end_at=2021-01-29&base=${this.currencyFrom}&symbols=${this.currencyTo}`  
    // this.http.fetchCurrencyValues(this.customFetchDataRequest).subscribe(data => {
    // this.rawFinalData = data;
console.log(this.amount, this.currencyTo, this.currencyFrom)



  //   this.finalData =  Object.entries(this.rawFinalData.rates).sort();
  //   this.lastValue = this.finalData[this.finalData.length -1][1];

  //   this.chartValues = [{data:this.finalData.map((data:any) => Object.values(data[1]))}] ;

  //   this.chartLabels = this.finalData.map((data:any) => data[0]);


     
  //   for (const [key,value] of Object.entries(this.lastValue)) {
  //     this.lastValue.key = key;
  //     this.lastValue.value = value;
  //   }

  //  })
  // }
  }
}
