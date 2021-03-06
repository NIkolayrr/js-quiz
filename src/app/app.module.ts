import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card'
import { WelcomeComponent } from './welcome/welcome.component'
import { MatDialogModule } from '@angular/material/dialog'
import { DialogComponent } from './dialog/dialog.component'
import { MatButtonModule } from '@angular/material/button'
import { QuizComponent } from './quiz/quiz.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatRadioModule } from '@angular/material/radio'
import { ScoreComponent } from './score/score.component'
import { CountdownPipe } from './countdown.pipe'
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome'
import {
  faArrowAltCircleRight,
  faArrowCircleLeft,
  faArrowCircleRight,
  faClock,
  faStar,
  faUndo,
} from '@fortawesome/free-solid-svg-icons'
import { MatTooltipModule } from '@angular/material/tooltip'

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DialogComponent,
    QuizComponent,
    ScoreComponent,
    CountdownPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    FontAwesomeModule,
    MatTooltipModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faStar,
      faClock,
      faUndo,
      faArrowCircleLeft,
      faArrowCircleRight
    )
  }
}
