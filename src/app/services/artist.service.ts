import { Injectable } from '@angular/core';
import { map, Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Artist } from "src/app/interfaces/artist";

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  public getArtists(searchCharacter:string): Observable<Artist[]>{
    return this.http
      .get<Artist[]>(`${environment.API.artistAPI}${searchCharacter}`)
      .pipe(map((res: any) => res.artists));
  }
}
