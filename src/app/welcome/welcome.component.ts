import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { DialogComponent } from '../dialog/dialog.component'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(type: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      hasBackdrop: true,
      data: { type: type },
    })

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`)
    })
  }
}
