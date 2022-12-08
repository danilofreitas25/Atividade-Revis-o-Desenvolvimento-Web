import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Layout } from '../tracks/layout/layout';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  readonly API = 'http://localhost:3000/tracks/';

  HttpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getTracks() {
    return this.http.get<Layout[]>(this.API);
  }

  postTracks(track: Layout){
    //console.log(track)
    try{
    return this.http.post(this.API, JSON.stringify(track), this.HttpOptions).subscribe();
    }finally{
      location.replace('/pistas/');
      }
  }

  delTracks(id: number){
  try{
    return this.http.delete(this.API + id).subscribe();
  }finally{
    location.reload();
  }
  }
}
