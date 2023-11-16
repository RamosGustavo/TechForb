import { Component } from '@angular/core';
import { Egresos } from './interface/egresos.interface';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.scss']
})
export class EgresosComponent {

  data: Egresos[] = [
    { month: 'Enero', value: 10 },
    { month: 'Febrero', value: 15 },
    { month: 'Marzo', value: 17 },
    { month: 'Abril', value: 22 },
    { month: 'Mayo', value: 15 },
    { month: 'Junio', value: 20 },
    { month: 'Julio', value: 24 },
    { month: 'Agosto', value: 18 },
    { month: 'Septiembre', value: 13 },
    { month: 'Octubre', value: 20 },
    { month: 'Noviembre', value: 17 },
    { month: 'Diciembre', value: 21 },
  ];

  lineChartData: any[] = [
    {
      data: this.data.map((item) => item.value),
      label: 'Egresos Mensuales',
      type: 'line',
    },
  ];

  lineChartLabels: string[] = this.data.map((item) => item.month);
}
