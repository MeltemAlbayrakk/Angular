import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { MockApiService } from '../../mock-api.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-popup-dialog',
  standalone: true,
  template: `
  <h1>Popup İçeriği</h1>
  <p>Buraya istediğiniz içeriği ekleyebilirsiniz.</p>
  <button mat-button (click)="close()">Kapat</button>
`,
  imports: [ FormsModule,HttpClientModule ],
  templateUrl: './popup-dialog.component.html',
  styleUrl: './popup-dialog.component.css'
})
export class PopupDialogComponent {
  constructor(private http: HttpClient,public dialogRef: MatDialogRef<PopupDialogComponent>,private mockApiService: MockApiService) {}

  formData: any = {}; // formData'nın bir nesne olarak tanımlanması


  close(): void {
    this.dialogRef.close();
  }


  addCustomer(){

    const newCustomer = {
      name: this.formData.name,
      surname: this.formData.surname,
      phone: this.formData.phone,
      email: this.formData.email,
      age: this.formData.age,
      joiningDate: this.formData.joiningDate
    };

    this.mockApiService.addCustomer(newCustomer)
      .then(response => {
        console.log("Kullanıcı eklendi", response);

        this.close();
      })
      .catch(error => {
        console.error("Error adding new customer:", error);

      });
    }
}
