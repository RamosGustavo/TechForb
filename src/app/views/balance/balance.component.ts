// balance.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { BalanceService } from './service/balance.service';

interface ChartDataResponse {
  label: string;
  data: number[];
}

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: { min: 0, max: 100 },
    },
  };

  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];

  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [],
  };

  constructor(private balanceService: BalanceService) { }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.balanceService.getChartData().subscribe({
      next: (data: any) => {
        if (Array.isArray(data)) {
          this.barChartData.labels = data.map(item => item.label);
          this.barChartData.datasets = [{
            label: data[0].label,
            data: data[0].data,
          }, {
            label: data[1].label,
            data: data[1].data,
          }];

          this.chart?.update();
        }
      }
    },
    );
  }

  public chartClicked({ event, active }: { event?: any; active?: object[] }): void {
  }

  public chartHovered({ event, active }: { event?: any; active?: object[] }): void {
  }

  public randomize(): void {
    this.balanceService.getChartData().subscribe(
      (data) => {
        this.barChartData = {
          labels: data.map(item => item.label),
          datasets: [{
            label: data[0].label,
            data: data[0].data,
          }, {
            label: data[1].label,
            data: data[1].data,
          }],
        };
        this.chart?.update();
      },
    );
  }
}
