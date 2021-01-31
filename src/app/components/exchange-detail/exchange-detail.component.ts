import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../../services/exchange.service';

@Component({
  selector: 'app-exchange-detail',
  templateUrl: './exchange-detail.component.html',
  styleUrls: ['./exchange-detail.component.scss']
})
export class ExchangeDetailComponent implements OnInit {

  constructor(public exchangeService: ExchangeService) { }

  ngOnInit(): void {
  }

}
