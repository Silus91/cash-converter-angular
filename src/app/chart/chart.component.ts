import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() chartValues:any;
  @Input() chartLabels:any;
  @Input() message:any;

  // public lineChartData = [
  //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  // ];
  public lineChartLabels= ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions = {
    responsive: true,
  };
  public lineChartColors = [
    {
      borderColor: 'black',
      backgroundColor: 'transparent',
    },
  ];
  public lineChartLegend = true;
  public lineChartType:any = 'line';

  constructor( ) { }

  ngOnInit(): void {
    console.log("chart", this.chartValues, this.chartLabels)

  }

}
