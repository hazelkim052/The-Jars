import { Component, OnInit } from '@angular/core';
import { HappyService } from '../../service/happy.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-happiness-dialog',
  templateUrl: './happiness-dialog.component.html',
  styleUrls: ['./happiness-dialog.component.css'],
})
export class HappinessDialogComponent implements OnInit {
  stories: any;
  randomStory: any;

  constructor(public happyService: HappyService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.happyService
      .getStories()
      .subscribe((stories) => ((this.stories = stories), this.pick()));
  }

  pick() {
    this.randomStory =
      this.stories[Math.floor(Math.random() * this.stories.length)];
    console.log(this.randomStory);
  }
}
