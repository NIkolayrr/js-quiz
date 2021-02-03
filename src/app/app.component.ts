import { Component, OnInit } from '@angular/core'
import { version } from 'package.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'js-quiz'
  version = version
  ngOnInit() {}
}
