import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/berkankarayel', icon: '🐙' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/berkankarayel/', icon: '💼' },
   
  ];
}
