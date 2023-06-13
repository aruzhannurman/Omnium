import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'second';

  items=[
    {
    title:'Users',
    icon:'./assets/link.png'
  },
  {
    title:'Features',
    icon:'./assets/link.png'
  },
  {
    title:'Main',
    icon:'./assets/link.png'
  },
]



}

