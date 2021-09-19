import { Component, OnInit } from '@angular/core';
import { HappyService } from '../../service/happy.service';
import { MatDialog } from '@angular/material/dialog';
import { HappinessDialogComponent } from '../happiness-dialog/happiness-dialog.component';
import * as dayjs from 'dayjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-happiness',
  templateUrl: './happiness.component.html',
  styleUrls: ['./happiness.component.css'],
})
export class HappinessComponent implements OnInit {
  date: any;
  story: any;
  stories: any;

  constructor(
    public happyService: HappyService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.happyService
      .getStories()
      .subscribe((stories) => (this.stories = stories));
  }

  try() {
    this.router.navigateByUrl('/');
  }

  post(story: any, date: any) {
    date = dayjs(date).format('MMMM DD, YYYY');
    this.happyService.postHappyStory(story, date);
  }

  pick() {
    const dialogRef = this.dialog.open(HappinessDialogComponent, {
      width: '250px',
      height: '150px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
