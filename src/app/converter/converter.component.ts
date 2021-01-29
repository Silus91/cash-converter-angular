import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  cashValues: any;
  values:any;
  selected= 0;
  exchange?:Number;
  exchangeModel:any;
  sum?:Number;

  constructor(private _http: HttpService) { }


  ngOnInit(): void {
    this._http.fetchCurenctValue().subscribe(data => {
      this.cashValues = data;
      this.values = Object.entries(this.cashValues.rates);
    });
    

  }

  onSelect(){
    console.log("nee");

  }

  exchangeValue(event:any) {
    console.log(event.target.value * this.selected);
    this.exchange = event.target.value;
    this.sum = this.exchangeModel * this.selected;
  }

  onSubmit() {
    this.sum =  this.selected + this.exchangeModel;
    console.log("excha44nge", this.exchangeModel, this.sum, this.selected);
  }

  
}
