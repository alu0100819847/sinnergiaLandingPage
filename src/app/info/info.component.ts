import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-index',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  square =  '/src/img/square.png';

  constructor() { }

  ngOnInit(): void {
  }

}
