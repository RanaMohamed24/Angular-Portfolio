import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skills=[
    {name:'html',level:90, color:'danger'},
    {name:'css',level:85, color:'primary'},
    {name:'js',level:80, color:'warning'},
    {name:'angular',level:20, color:'success'},
  ]

}
