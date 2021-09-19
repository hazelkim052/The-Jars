import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HappyService {
  constructor(private http: HttpClient) {}

  postHappyStory(story: any, date: any) {
    console.log('FROM API: ', story);
    let input = { story: story, date: date };
    console.log('json input', input);
    this.http.post('https://localhost:4200/happy', input).subscribe((res) => {
      console.log(res);
    });
  }
}
