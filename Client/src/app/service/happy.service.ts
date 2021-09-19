import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HappyService {
  constructor(private http: HttpClient) {}

  postHappyRecord(record: any) {
    console.log('FROM API: ', record);
    this.http.post('https://localhost:4200/happy', record).subscribe((res) => {
      console.log(res);
    });
  }
}
