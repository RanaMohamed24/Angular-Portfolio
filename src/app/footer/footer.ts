import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  email = 'rana.m.abdelhalim@gmail.com';
  year = 2026;
  name = 'Rana Mohamed';
  
  socialLinks = [
    { icon: 'fab fa-facebook', link: '#' },
    { icon: 'fab fa-github', link: 'https://github.com/RanaMohamed24' },
    { icon: 'fab fa-linkedin', link: '#' }
  ];

}
