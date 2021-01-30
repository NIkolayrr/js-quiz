import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private route: Router, private dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
  }

  goToQuestions() {
    this.route.navigate(['quiz'])
    this.dialogRef.close()
  }

}
