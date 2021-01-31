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
import { MatRadioModule } from '@angular/material/radio';
import { ScoreComponent } from './score/score.component'

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DialogComponent,
    QuizComponent,
    ScoreComponent,
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
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
