import { Component, OnInit, Input } from '@angular/core';
import { Artist } from "src/app/interfaces/artist";

@Component({
  selector: 'app-artistdetail',
  templateUrl: './artistdetail.component.html',
  styleUrls: ['./artistdetail.component.css']
})
export class ArtistdetailComponent implements OnInit {
  @Input("artist") artist!: Artist;

  constructor() { }

  ngOnInit(): void {
    console.log(this.artist);
  }

}
