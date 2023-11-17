import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TransaccionesService } from './service/transacciones.service';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.scss']
})
export class TransaccionesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  displayedColumns: string[] = ['position', 'name', 'value', 'symbol', 'estado'];

  data = new MatTableDataSource([]);

  constructor(private transaccionesService: TransaccionesService) { }

  ngOnInit(): void {
    this.transaccionesService.getTransactions().subscribe({
      next: (data: any) => {
        this.data = new MatTableDataSource(data);
        if (this.paginator) {
          this.data.paginator = this.paginator;
        }
      }
    });
  }

  onPageChange(event: any) {
  }
}
