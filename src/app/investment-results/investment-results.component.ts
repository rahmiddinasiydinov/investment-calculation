import { Component, computed } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  constructor(private investmentService : InvestmentService){}

  // get results(){
  //   return this.investmentService.resultsData
  // }

  results = computed(() => this.investmentService.resultsData())
  // results = this.investmentService.resultsData.asReadonly() alternative way
}
