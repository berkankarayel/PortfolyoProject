import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  //html içersinde <app-header></app-header> olarak kullanılır
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 menuItems = [
    { name: 'Ana Sayfa', link: '#home' },
    { name: 'Hakkımda', link: '#about' },
    { name: 'Yetenekler', link: '#skills' },
    { name: 'Projeler', link: '#projects' },
    
  ];
}
