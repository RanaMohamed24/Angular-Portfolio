import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = [
    {
      title: 'Nexus Community',
      description: 'Unified Team Collaboration Platform integrating Trello, Slack, and calendar scheduling. Built with MERN stack and Socket.IO.',
      link: 'https://github.com/RanaMohamed24/Project-Management'
    },
    {
      title: 'E-commerce Website',
      description: 'Modern online store with 8+ pages, featuring product catalog, shopping cart, and user authentication.',
      link: 'https://github.com/RanaMohamed24/E-commerce'
    },
    {
      title: 'Food Delivery Website',
      description: 'Comprehensive food delivery website with 6+ pages, implementing menu browsing and real-time database.',
      link: 'https://github.com/RanaMohamed24/Food-Delivery'
    }
  ];

}
