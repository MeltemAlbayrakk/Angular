import { Component,OnInit  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupDialogComponent } from '../popup-dialog/popup-dialog.component';
import { HttpClient } from '@angular/common/http';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [PopupDialogComponent, HttpClientModule,CommonModule,
    FormsModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  constructor(public dialog: MatDialog, private http: HttpClient) { // rowVisibility dizisini tablodaki her satır için varsayılan olarak false (görünür) olarak ayarlayın

  }

  customers: any[] = [];






  ngOnInit(): void {
    this.fetchCustomers();
  }

  fetchCustomers(): void {
    console.log('Customers:');
   this.http.get<any[]>('/getCustomers').subscribe((response) => {
      this.customers = response;
      console.log('Customers:');
    });

  }



  openPopup(): void {
    const dialogRef = this.dialog.open(PopupDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }
}
