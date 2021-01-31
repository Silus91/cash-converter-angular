import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConverterComponent } from './converter/converter.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Exchange } from './exchange';
import { ChartComponent } from './components/chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { ExchangeFormComponent } from './components/exchange-form/exchange-form.component';
import { ExchangeDetailComponent } from './components/exchange-detail/exchange-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    ChartComponent,
    ExchangeFormComponent,
    ExchangeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  exchangeModel = new Exchange(4)
 }
