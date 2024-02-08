import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  currentDateTime: string='';
  currentDay: string='';

  constructor() {
    this.updateDateTime();
    setInterval(() => {
      this.updateDateTime();
    }, 1000); // her saniyede bir güncelle
  }

  private updateDateTime(): void {
    const now = new Date();

    // Tam tarih ve gün
    this.currentDay = `${this.getDayOfWeek(now)}, ${this.getMonthName(now)} ${now.getDate()}, ${now.getFullYear()}`;

    // Saat ve dakika
    this.currentDateTime = now.toLocaleTimeString('en-US', {
      hour12: false, // 24 saatlik biçim
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  private getDayOfWeek(date: Date): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  }

  private getMonthName(date: Date): string {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[date.getMonth()];
  }
}
