import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from '../services/helper.service';
import { getDataQuestion } from '../questions';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  star = 100;
  grade = '1';
  grades = [];
  constructor(
    private route: Router,
    private helper: HelperService
  ) {
    this.grades = getDataQuestion();
  }

  async ngOnInit() {
    const star = await this.helper.getStorage('star');
    if (star) {
      this.star = star;
      console.log(star);
    } else {
      await this.helper.setStorage('star', this.star);
    }
  }

  start() {
    console.log(this.grade);
    this.route.navigate(['question'], {queryParams: {
      grade: this.grade,
      q: 1
    }});
  }

}
