import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servico/database.service';
import { Layout } from '../layout/layout';

@Component({
  selector: 'pis-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.css']
})
export class TracklistComponent implements OnInit{

  tracks: Layout [] = [];

  constructor(private banco: DatabaseService){}
  
  ngOnInit(): void {
    this.banco.getTracks().subscribe(results => this.tracks = results);  
  }

  deletar(id : number){
    
    this.banco.delTracks(id)
  }
  

}
