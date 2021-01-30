import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl } from '@angular/forms'
import { Router } from '@angular/router'
import { timer } from 'rxjs'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  result = 0
  questions = [
    {
      type: 'multiple',
      question: 'Which company developed JavaScript?',
      answers: [
        { text: 'Google', points: 0 },
        { text: 'Facebook', points: 0 },
        { text: 'Twitter', points: 0 },
        { text: 'Netscape', points: 1 },
      ],
    },
    {
      type: 'multiple',
      question: 'What would be the result in the console 3+2+"7"',
      answers: [
        { text: '12', points: 0 },
        { text: '327', points: 0 },
        { text: '57', points: 1 },
      ],
    },
  ]
  quiz1: any
  constructor(private route: Router, private fb: FormBuilder) {}
  ngOnInit(): void {
    const group = {} as any
    this.questions.forEach((question) => {
      group[question.question] = new FormControl('')
    })
    this.quiz1 = this.fb.group(group)
  }

  submitForm() {
    this.result = 0
    Object.keys(this.quiz1.value).map((val) => {
      this.result += this.quiz1.value[val].points
    })
  }
}
