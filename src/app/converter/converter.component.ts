import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  rawCurrencyData: any;
  currencies:any;
  currencyFrom:any;
  currencyTo:any;
  exchange=1;
  rawFinalData:any;
  finalData:any;
  customRequest:any
  lastValue:any;
  public chartLabels:any;
  public chartValues:any;

  constructor(private _http: HttpService) { }


  ngOnInit(): void {
    this._http.fetchCurenctValue().subscribe(data => {
      this.rawCurrencyData = data;
      this.currencies = Object.keys(this.rawCurrencyData.rates);
    });
    

  }
message = "huj ci do tego";
  exchangeValue(event:any) {
    this.exchange = event.target.value;
  }

  onSubmit() {
this.customRequest = `https://api.exchangeratesapi.io/history?start_at=2021-01-20&end_at=2021-01-29&base=${this.currencyFrom}&symbols=${this.currencyTo}`  
   this._http.fetchCurrencyValues(this.customRequest).subscribe(data => {
     this.rawFinalData = data;
     this.finalData =  Object.entries(this.rawFinalData.rates);
     this.lastValue = this.finalData[this.finalData.length -1][1];


     this.chartValues = [{data:this.finalData.map((data:any) => Object.values(data[1]))}] ;

this.chartLabels = this.finalData.map((data:any) => data[0]);


     
    for (const [key,value] of Object.entries(this.lastValue)) {
      this.lastValue.key = key;
      this.lastValue.value = value;
    }

   })
  }





  
}
