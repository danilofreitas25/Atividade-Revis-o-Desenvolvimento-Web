import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pis-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imagemHome = "https://cdn.gpblog.com/news/2022/08/26/v2_large_d3ec57e782f4beb4a94017aa45d8f8d2e9a6cf82.jpg";
  constructor() {}

  ngOnInit(): void {
    
  }

}
