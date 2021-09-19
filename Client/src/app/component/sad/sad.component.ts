import { Component, OnInit } from '@angular/core';
import { HappyService } from '../../service/happy.service';
import { Router } from '@angular/router';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-sad',
  templateUrl: './sad.component.html',
  styleUrls: ['./sad.component.css'],
})
export class SadComponent implements OnInit {
  date: any;
  story: any;
  constructor(public happyService: HappyService, private router: Router) {}

  ngOnInit(): void {}
  try() {
    this.router.navigateByUrl('/');
  }
  post(story: any, date: any) {
    date = dayjs(date).format('MMMM DD, YYYY');
    this.happyService.postSadness(story, date);
  }
}
