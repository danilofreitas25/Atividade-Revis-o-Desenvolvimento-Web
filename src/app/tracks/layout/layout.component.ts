import { Component, Input, OnInit } from '@angular/core';

import { Layout } from './layout';

@Component({
  selector: 'pis-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{

  @Input() layt = "";

  ngOnInit(): void {};

}
