import { Component, OnInit } from '@angular/core';
import { LatestExchangeResponse } from 'src/app/types/exchangeRateApi';
import { ExchangeService } from '../../services/exchange.service';


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

  constructor(private exchangeService: ExchangeService) { }

  ngOnInit(): void {
    this.exchangeService.fetchLatestRates().subscribe(({rates}) => {
      this.currencies = Object.keys(rates);
    })
  }

  onSubmit() {
    this.exchangeService.fetchHistoricRates(this.currencyFrom, this.currencyTo);
    this.exchangeService.amount = this.amount;
  }
}



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