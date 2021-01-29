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
  exchange=0;;
  exchangeModel:any;
  sum?:Number;
  customRequest:any

  constructor(private _http: HttpService) { }


  ngOnInit(): void {
    this._http.fetchCurenctValue().subscribe(data => {
      this.rawCurrencyData = data;
      this.currencies = Object.keys(this.rawCurrencyData.rates);
    });
    

  }
onSelect() {
  
}

  exchangeValue(event:any) {
    console.log(this.currencyFrom);
    this.exchange = event.target.value;
    ;

  }

  onSubmit() {
    //this.sum =  this.selected + this.exchangeModel;
   // console.log("excha44nge", this.exchangeModel, this.sum, this.selected);
this.customRequest = `https://api.exchangeratesapi.io/history?start_at=2021-01-01&end_at=2021-01-29&base=${this.currencyFrom}&symbols=${this.currencyTo}`  
   this._http.fetchCurrencyValues(this.customRequest).subscribe(data => {
     console.log("jestesmy", data)
   })
  }

  //funkcja ktora na event change zmienia dane w fetch api  i submit button ktory akceptuje wszystko i wysyla requesta o dane dotyczoacych 
  //currencies itp a potem chart



  
}
