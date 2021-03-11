import { Component, OnInit } from '@angular/core';
import { Album } from '../models';
import { AlbumsService } from '../albums.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album | undefined;
  title = '';

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private albumService: AlbumsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.getAlbum(id);
    });
  }

  getAlbum(id: string | null): void {
    this.albumService.getAlbum(id).subscribe((album) => {
      this.album = album;
    });
  }

  goBack(): void {
    this.location.back();
  }

  saveTitle(): void {
    if (this.album && this.title) {
      this.album.title = this.title;
      this.title = '';
      const res = this.albumService.updateAlbum(this.album).subscribe((album) => {
        // console.log(album);
      });
    }
  }
}
