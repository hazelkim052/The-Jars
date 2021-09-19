import { Component, OnInit } from '@angular/core';
import { HappyService } from '../../service/happy.service';
import { Router } from '@angular/router';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-motivate',
  templateUrl: './motivate.component.html',
  styleUrls: ['./motivate.component.css'],
})
export class MotivateComponent implements OnInit {
  date: any;
  story: any;
  constructor(public happyService: HappyService, private router: Router) {}

  ngOnInit(): void {}
  try() {
    this.router.navigateByUrl('/');
  }
  post(story: any, date: any) {
    date = dayjs(date).format('MMMM DD, YYYY');
    this.happyService.postMotivation(story, date);
  }
}
