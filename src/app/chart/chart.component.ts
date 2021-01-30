import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() chartValues:any;
  @Input() chartLabels:any;

  public lineChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
          ticks: {
   //nie updateuje sie skala ticks do daty. stoi na 1 co 0.1
   // mozna hardcoded max tick level
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
  public lineChartLegend = true;
  public lineChartType:any = 'line';

  constructor( ) { }

  ngOnInit(): void {

  }

}
