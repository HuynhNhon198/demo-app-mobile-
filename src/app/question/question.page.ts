import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { getDataQuestion } from '../questions';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {
  questionNumber: number;
  grade: string;
  sub: Subscription;
  question: any;
  star: number;
  name: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private helper: HelperService
  ) {
  }

  async ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(async params => {
        // Defaults to 0 if no query param provided.
        this.questionNumber = params.q;
        this.grade = params.grade;
        this.star = await this.helper.getStorage('star');
        console.log(this.star);
        this.renderQuestion();
      });
  }

  renderQuestion() {
    const data = getDataQuestion();
    const grade = data.find(x => x.grade === this.grade);
    this.name = grade.name;
    this.question = grade.questions[this.questionNumber];
    if (this.question === undefined) {
      alert('KHÔNG CÒN CÂU HỎI THUỘC LỚP NÀY NỮA');
      this.router.navigate(['home']);
    }
  }

  goHome() {
    this.router.navigate(['home']);
    setTimeout(() => {
      location.reload();
    }, 100);
  }

  async selectAnsw(i: number) {
    const answ = this.question.answers[i];
    if (answ.checked) {
      this.question.answers.forEach((e, ind) => {
        if (ind !== i) {
          e.checked = false;
        }
      });
    }
    if (answ.checked === answ.correct) {
      alert('🎉 Chúc mừng bạn đã trả lời đúng câu hỏi và được cộng thêm 3 ⭐');
      const next = +this.questionNumber + 1;
      await this.helper.setStorage('star', +this.star + 3);
      this.router.navigate(['question'], {
        queryParams: {
          grade: this.grade,
          q: next
        }
      });
    } else {
      alert('😞 Sai rồi ạ!');
    }
  }

  async suggest() {
    const correct = this.question.answers.find(x => x.correct);
    alert (correct.answer);
    this.star = +this.star - 3;
    await this.helper.setStorage('star', this.star);
  }

  async goNext() {
    this.star = +this.star - 1;
    await this.helper.setStorage('star', this.star);
    const next = +this.questionNumber + 1;
    this.router.navigate(['question'], {
      queryParams: {
        grade: this.grade,
        q: next
      }
    });
  }

}
