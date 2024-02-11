import { Component,OnInit  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupDialogComponent } from '../popup-dialog/popup-dialog.component';
import { HttpClient } from '@angular/common/http';
import { MockApiService } from '../../mock-api.service';
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

  mock: any[] = [];
  constructor(public dialog: MatDialog, private http: HttpClient,private mockApiService: MockApiService) {

  }

  customers: any[] = [];






  ngOnInit(): void {
    this.getMock();
  }

  getMock() {
    this.mockApiService.getRandomMock()
    .then(response => {
      console.log("bu response:", response);
      this.mock = response.data;
      console.log("çalıştı", this.mock);
    })
    .catch(error => {
      console.log(error);
    });
  }

  checkItem(email:string){
    const index = this.customers.indexOf(email);
    if (index === -1) {
        // Kullanıcı dizide değilse, ekleyin
        this.customers.push(email);
        console.log("eklendi dizi:",this.customers)
    } else {
        // Kullanıcı dizide ise, çıkarın
        this.customers.splice(index, 1);
        console.log("cıkarıldı dizi:",this.customers)

    }
  }

  toggleSelectAll(event: any) {
    if (event.target.checked) {
      this.customers=[]
        // Tüm mock verilerini customers dizisine ekle
        this.mock.forEach((item: any) => {
            this.customers.push(item.email);
            console.log(this.customers)
        });
    } else {
        // customers dizisini boşalt
        this.customers = [];
        console.log(this.customers)

    }
}

deleteCustomer(email:string){
  //apiden silme
  this.mockApiService.deleteCustomer(email)
    .then(response => {
      console.log("bu response:", response);


    })
    .catch(error => {
      console.log(error);
    });




//diziden silme

  const index = this.mock.findIndex(item => item.email === email);
  if (index !== -1) {
      // Bulunan öğeyi listeden kaldır
      this.mock.splice(index, 1);
      console.log("bu mockk:",this.mock)
  } else {
      console.log("Email'e sahip öğe bulunamadı.");
  }
}

  openPopup(): void {
    const dialogRef = this.dialog.open(PopupDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }
}
