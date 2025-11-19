import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/kullaniciadi', icon: '🐙' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/kullaniciadi', icon: '💼' },
    { name: 'Twitter', url: 'https://twitter.com/kullaniciadi', icon: '🐦' },
    { name: 'Email', url: 'mailto:email@example.com', icon: '✉️' }
  ];
}
