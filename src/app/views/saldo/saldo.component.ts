import { Component, OnInit } from '@angular/core';
import { SaldoService } from './service/saldo.service';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.scss']
})
export class SaldoComponent implements OnInit {

  public cardData: any; 

  constructor(private saldoService: SaldoService) { }

  ngOnInit() {
    this.getCardData();
  }


  getCardData() {
    this.saldoService.getCards().subscribe({
      next: (data: any) => {
        this.cardData = data;
      }
    })
  }
}
