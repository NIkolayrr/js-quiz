import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router'
import { Subscription, timer } from 'rxjs'
import { beginner } from '../../quizes/beginner'
import { ScoreComponent } from '../score/score.component'
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit, OnDestroy {
  result: any
  questions: any
  quiz1: any
  constructor(
    private route: Router,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}
  countDown: any
  counter = 0
  tick = 1000
  ngOnInit(): void {
    this.countDown = timer(0, this.tick).subscribe(() => {
      if (this.counter === 0) {
        this.submitForm()
      } else {
        --this.counter
      }
    })
    this.questions = this.shuffleArray(beginner) // make dynamic
    const group = {} as any
    this.questions.forEach((question: any) => {
      group[question.question] = new FormControl('')
    })
    this.counter = this.questions.length * 40 // 40 seconds for question
    this.quiz1 = this.fb.group(group)
  }

  ngOnDestroy() {
    this.countDown = null
  }

  shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  }

  submitForm() {
    this.result = 0
    Object.keys(this.quiz1.value).map((val) => {
      if (!this.quiz1.value[val].points) return
      this.result += this.quiz1.value[val].points
    })
    this.dialog.open(ScoreComponent, {
      hasBackdrop: true,
      data: { score: this.result, questions: this.questions },
    })
    this.quiz1.reset() // reset form
  }
}
