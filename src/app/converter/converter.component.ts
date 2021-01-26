import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  cashValues: Object;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.fetchCurenctValue().subscribe(data => {
      this.cashValues = data
      console.log (this.cashValues)
    }); 
  }

}
