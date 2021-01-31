import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../../services/exchange.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  public lineChartData: { data: number[] }[] = [];
  public lineChartLabels: string[] = [];
  public lineChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
          ticks: {
            display:true,
            beginAtZero:true
          }
      }]
    }
  };
  public lineChartColors = [
    {
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
  ];
  public lineChartLegend = false;
  public lineChartType:any = 'line';

  constructor(public exchangeService: ExchangeService) { }

  ngOnInit(): void {
    this.lineChartLabels = Object.keys(this.exchangeService.historicRates).map(rate => {
      return rate;
    })
  }
}
