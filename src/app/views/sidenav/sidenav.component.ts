import { Component, OnInit } from '@angular/core';
import { SidenavService } from './service/sidenav.service';
import { LoginService } from '../../pages/login/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  
  public menuItems: { icon: string, title: string }[] = [];

  constructor(private sidenavService: SidenavService, private loginService: LoginService, private router: Router,) { }

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

  logout(icon: string) {
    if (icon === 'logout') {
      this.loginService.setLogout()
      this.router.navigate(['login']);
    } 
  }
}