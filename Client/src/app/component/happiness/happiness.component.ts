import { Component, OnInit } from '@angular/core';
import { HappyService } from '../../service/happy.service';

@Component({
  selector: 'app-happiness',
  templateUrl: './happiness.component.html',
  styleUrls: ['./happiness.component.css'],
})
export class HappinessComponent implements OnInit {
  date: any;
  story: any;
  stories: any;
  constructor(public happyService: HappyService) {}

  ngOnInit(): void {
    this.happyService
      .getStories()
      .subscribe((stories) => (this.stories = stories));
  }

  post(story: any, date: any) {
    console.log('post test');
    console.log('story', story);
    console.log('date', date);
    this.happyService.postHappyStory(story, date);
  }

  pick() {
    var story = this.stories[Math.floor(Math.random() * this.stories.length)];
    console.log(story);
  }
}
