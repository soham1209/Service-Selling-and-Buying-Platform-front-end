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
}
