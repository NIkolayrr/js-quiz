import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { QuizComponent } from './quiz/quiz.component'
import { WelcomeComponent } from './welcome/welcome.component'

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'quiz', component: QuizComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
