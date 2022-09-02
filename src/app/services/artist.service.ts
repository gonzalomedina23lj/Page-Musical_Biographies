import { Injectable } from '@angular/core';
import { map, Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  public getArtist(searchCharacter:string): Observable<any>{
    return this.http
      .get<any>(`${environment.API.artistAPI}${searchCharacter}`)
  }
}
