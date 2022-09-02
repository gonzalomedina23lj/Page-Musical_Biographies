import { HttpClient, HttpHandler } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { debounceTime, distinct, filter, switchMap } from "rxjs/operators";
import { ArtistService } from "src/app/services/artist.service";
import { Artist } from "src/app/interfaces/artist";

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  public searchCharacter = new FormControl();
  public artists$!: Observable <Artist[]>;


  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
    this.artists$ = this.searchCharacter.valueChanges
      .pipe(
        filter((searchCharacter: string) => searchCharacter.length > 3),
        debounceTime(400),
        distinct(),
        /* switchMap((response) => this.artistService.getArtists(response ?? "")) */
      )
  }

  

}
