import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from '../models';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];

  constructor(
    private albumService: AlbumsService,
  ) {  }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    });
  }
  deleteAlbum(id: number): void {
    this.albums = this.albums.filter((album) => album.id !== id );
    this.albumService.deleteAlbum(id).subscribe((albums) => {
      console.log(albums);
    });
  }
}
