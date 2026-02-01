import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
   bio = `I am a Computer Science graduate with strong expertise in modern web technologies and user interface design. Proficient in React, JavaScript, and responsive design, I have hands-on experience in building scalable web applications.
I graduated from the Faculty of Computers and Information, Menoufia University in July 2025. Currently, I am pursuing the 9-Month Open Source Track at the Information Technology Institute (ITI), further deepening my expertise in modern web development and open-source contributions.`;
  education = [
    'Bachelor in Computer Science - Menoufia University'
  ];
  cvLink = 'https://drive.google.com/drive/folders/1fNt9euXMd0Y1T5-urXQmHY-vKPlyVlgV?usp=drive_link';

}
