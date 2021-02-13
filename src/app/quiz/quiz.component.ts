import { Component, HostListener, OnDestroy, OnInit } from '@angular/core'
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router'
import { Subscription, timer } from 'rxjs'
import { beginner } from '../../quizes/beginner'
import { ScoreComponent } from '../score/score.component'
import { faUndo } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit, OnDestroy {
  faUndo = faUndo

  stickyHeader: boolean = false
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
  timer = timer(0, this.tick).subscribe(() => {
    if (this.counter === 0) {
      this.submitForm()
    } else {
      --this.counter
    }
  })
  ngOnInit(): void {
    this.countDown = timer
    this.questions = this.shuffleArray(beginner) as FormArray // make dynamic
    const group = {} as any
    this.questions.forEach((question: any) => {
      group[question.question] = new FormControl('')
    })
    this.counter = this.questions.length * 40 // 40 seconds for question
    this.quiz1 = this.fb.group(group)
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll($event: any) {
    if (window.pageYOffset > 64) {
      this.stickyHeader = true
    } else {
      this.stickyHeader = false
    }
  }

  ngOnDestroy() {
    this.countDown = null
  }

  showWrongAnswers() {
    Object.keys(this.quiz1.controls).forEach((key) => {
      if (this.quiz1.controls[key].value.points === 0) {
        this.quiz1.controls[key].setErrors({ incorrect: true })
      }
    })
  }

  radioChange(e: any, index: number) {
    const text = e.value.text
    this.questions[index].selected = text
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

  reset() {
    this.quiz1.reset()
    this.counter = this.questions.length * 40
    this.countDown = this.timer
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
    this.showWrongAnswers()
    this.countDown.unsubscribe() // stop timer
  }
}
