import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-dialog',
  standalone: true,
  template: `
  <h1>Popup İçeriği</h1>
  <p>Buraya istediğiniz içeriği ekleyebilirsiniz.</p>
  <button mat-button (click)="close()">Kapat</button>
`,
  imports: [],
  templateUrl: './popup-dialog.component.html',
  styleUrl: './popup-dialog.component.css'
})
export class PopupDialogComponent {
  constructor(public dialogRef: MatDialogRef<PopupDialogComponent>) {}

  close(): void {
    this.dialogRef.close();
  }
}
