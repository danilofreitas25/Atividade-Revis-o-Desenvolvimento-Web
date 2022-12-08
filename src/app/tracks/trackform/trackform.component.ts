import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/servico/database.service';

@Component({
  selector: 'pis-trackform',
  templateUrl: './trackform.component.html',
  styleUrls: ['./trackform.component.css']
})
export class TrackformComponent implements OnInit {

  constructor (private banco: DatabaseService,
               private router: Router) {}
  
  ngOnInit(): void {
    
  }

  submit (valor: any){
    console.log(valor.value)
    this.banco.postTracks(valor.value);
    /*this.router.navigate(['/track']); */
  }

}
