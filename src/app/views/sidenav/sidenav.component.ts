import { Component, OnInit } from '@angular/core';
import { SidenavService } from './service/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  
  public menuItems: { icon: string, title: string }[] = []; // Inicialización

  constructor(private sidenavService: SidenavService) { }

  ngOnInit() {
    this.getMenuItems();
  }

  getMenuItems() {
    this.sidenavService.getTransactions().subscribe({
        next: (data: any) => {
          this.menuItems = data;
        },
        error: (error) => {
          console.error('Error al obtener los elementos del menú:', error);
        }
      }
    );
  }
}