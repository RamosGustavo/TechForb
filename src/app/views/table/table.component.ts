import { Component } from '@angular/core';
import { Table } from './interface/table.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  data: Table[] = [
    {
        montoTotal: '$800,000',
        cuotas: 'Cuota 10-24',
        fechaEmision: 'Marzo 25, 2022',
        mensual: '$ 50,000',
        tasaInteres: '10% Interés',
        botonVisible: 'Pagar'
    },
    {
        montoTotal: '$500,000',
        cuotas: 'Cuota 24-24',
        fechaEmision: 'Abril 25, 2021',
        mensual: '$ 30,000',
        tasaInteres: '10% Interés',
        botonVisible: 'Cancelado'
    }
];

  columnsToDisplay = ['checkbox', 'montoTotal', 'cuotas', 'fechaEmision', 'mensual', 'tasaInteres', 'botones', 'puntosSuspensivos'];
}
