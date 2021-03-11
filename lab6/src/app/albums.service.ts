import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Album, Photo } from './models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  httpOptions = new HttpHeaders({
    'Content-Type':  'application/json',
  });

  constructor(
    private http: HttpClient
  ) { }
  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getAlbum(id: string | null): Observable<Album> {
    return this.http.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  getPhotos(id: string | null): Observable<Photo[]> {
    return this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`https://jsonplaceholder.typicode.com/albums/${album.id}`, album);
  }

  deleteAlbum(id: number | null): Observable<any> {
    return this.http.delete(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
}
