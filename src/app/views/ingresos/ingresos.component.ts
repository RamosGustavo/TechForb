import { Component } from '@angular/core';
import { Ingresos } from './interface/ingresos.interface';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.scss']
})
export class IngresosComponent {

  data: Ingresos[] = [
    { month: 'Enero', value: 20 },
    { month: 'Febrero', value: 14 },
    { month: 'Marzo', value: 20 },
    { month: 'Abril', value: 25 },
    { month: 'Mayo', value: 18 },
    { month: 'Junio', value: 22 },
    { month: 'Julio', value: 17 },
    { month: 'Agosto', value: 20 },
    { month: 'Septiembre', value: 17 },
    { month: 'Octubre', value: 16 },
    { month: 'Noviembre', value: 19 },
    { month: 'Diciembre', value: 22 },
  ];

  lineChartDataa: any[] = [
    {
      data: this.data.map((item) => item.value),
      label: 'Ingresos Mensuales',
      type: 'line',
    },
  ];

  lineChartLabels: string[] = this.data.map((item) => item.month);
}
