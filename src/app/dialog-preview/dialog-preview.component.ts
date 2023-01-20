import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-preview',
  templateUrl: './dialog-preview.component.html',
  styleUrls: ['./dialog-preview.component.scss']
})
export class DialogPreviewComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogPreviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogPreviewComponent,
  ) { }

  ngOnInit(): void { }

  closeDialog() {

    this.dialogRef.close()

  }

}
