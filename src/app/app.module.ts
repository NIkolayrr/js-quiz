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

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DialogComponent,
    QuizComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
