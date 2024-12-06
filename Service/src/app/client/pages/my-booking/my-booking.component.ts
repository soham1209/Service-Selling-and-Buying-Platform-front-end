import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.scss']
})
export class MyBookingComponent {
  bookedServices: any;
  constructor(private clientService: ClientService) { }
  ngOnInit() {
    this.getMyBookings();
  }
  getMyBookings() {
    this.clientService.getMyBookings().subscribe(res => {
      this.bookedServices = res;
    })
  }


  getStatusClass(status: string): string {
    if (status === 'APPROVED') {
      return 'approved';
    } else if (status === 'REJECTED') {
      return 'rejected';
    } else if (status === 'PENDING') {
      return 'pending';
    }
    return ''; // Default case if the status is not defined
  }
}
