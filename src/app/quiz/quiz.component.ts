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
import { faCheck, faClock, faUndo } from '@fortawesome/free-solid-svg-icons'
import { filter, map, take } from 'rxjs/operators'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit, OnDestroy {
  faUndo = faUndo
  faClock = faClock
  faCheck = faCheck

  answered: number = 0
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
  currentQuestion: number = 0
  ngOnInit(): void {
    this.countDown = timer(0, this.tick).subscribe(() => this.countDownFunc())
    this.questions = this.shuffleArray(beginner) as FormArray // make dynamic
    const group = {} as any
    this.questions.forEach((question: any) => {
      group[question.question] = new FormControl('')
    })
    this.counter = this.questions.length * 40 // 40 seconds for question
    this.quiz1 = this.fb.group(group) as FormGroup

    this.quiz1.valueChanges.subscribe((questions: any) => {
      this.answered = Object.values(questions).filter(
        (qs) => qs !== '' && qs != null
      ).length
    })
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll($event: any) {
    if (window.pageYOffset > 64) {
      this.stickyHeader = true
    } else {
      this.stickyHeader = false
    }
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (
      event.key === 'ArrowRight' &&
      this.currentQuestion < this.questions.length - 1
    ) {
      this.goToNext(this.currentQuestion)
    }

    if (event.key === 'ArrowLeft' && this.currentQuestion > 0) {
      this.goToPrevious(this.currentQuestion)
    }
  }

  ngOnDestroy() {
    this.quiz1.valueChanges.unsubscribe()
    this.countDown.unsubscribe()
  }

  radioChange(e: any, index: number) {
    const text = e.value.text
    console.log(this.questions[index])
    this.questions[index].selected = text
  }

  goToPrevious(index: number) {
    this.currentQuestion = index - 1
  }

  goToNext(index: number) {
    this.currentQuestion = index + 1
  }

  countDownFunc() {
    if (this.counter === 0) {
      this.submitForm()
    } else {
      --this.counter
    }
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
  }

  submitForm() {
    this.result = 0
    this.questions.map((question: any) => {
      console.log(this.getCorrectAnswer(question))
      if (question.selected === this.getCorrectAnswer(question)) {
        this.result += 1
      } else {
        this.quiz1.controls[question.question].setErrors({ incorrect: true })
      }
    })
    this.dialog.open(ScoreComponent, {
      hasBackdrop: true,
      data: { score: this.result, questions: this.questions },
    })
    this.countDown.unsubscribe()
  }

  getCorrectAnswer(question: any) {
    const correctAnswer = question.answers.filter(
      (answ: any) => answ.points === 1
    )
    return correctAnswer[0].text
  }
}
