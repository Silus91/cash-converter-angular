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
  forValues:any;

  constructor(private _http: HttpService) { }


  ngOnInit(): void {
    this._http.fetchCurenctValue().subscribe(data => {
      this.cashValues = data;
      this.values = Object.entries(this.cashValues.rates);


    }); 
  }






  
}
