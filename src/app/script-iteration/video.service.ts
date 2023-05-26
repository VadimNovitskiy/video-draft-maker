import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

export interface VideoResponse {
  nb_results: number;
  files: VideoFile[]
}

export interface VideoFile {
  video_preview_url: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private _videos = new BehaviorSubject<VideoFile | null>(null);
  public readonly videos: Observable<VideoFile | null> = this._videos.asObservable();

  constructor(private http: HttpClient) { }

  loadVideoData(word: string) {
    const url = 'https://stock.adobe.io/Rest/Media/1/Search/Files';
    const headers = {
      'x-api-key': '4a9a2a2a9d7044c890eb879b8efe5716',
      'x-product': '4a9a2a2a9d7044c890eb879b8efe5716'
    };
    const params = {
      locale: 'en_US',
      'search_parameters[words]': `${word}`,
      'search_parameters[filters][content_type:video]': 1,
      'result_columns[]': ['video_preview_url', 'title', 'nb_results']
    };
    return this.http.get<VideoResponse>(url, { headers, params })
    .pipe(tap(
      res => {
        console.log(res);
        this._videos.next(res.files[0]);
    }));
  }
}
