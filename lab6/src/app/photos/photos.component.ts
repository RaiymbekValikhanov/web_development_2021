import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {AlbumsService} from '../albums.service';
import {Photo} from '../models';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: Photo[] = [];
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private albumService: AlbumsService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.getPhoto(id);
    });
  }
  getPhoto(id: string | null): void {
    this.albumService.getPhotos(id).subscribe((photos) => {
      this.photos = photos;
    });
  }
  goBack(): void {
    this.location.back();
  }

}
