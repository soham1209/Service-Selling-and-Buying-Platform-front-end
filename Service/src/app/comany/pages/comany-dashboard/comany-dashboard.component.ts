import { Component } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';


@Component({
  selector: 'app-comany-dashboard',
  templateUrl: './comany-dashboard.component.html',
  styleUrls: ['./comany-dashboard.component.scss']
})
export class ComanyDashboardComponent {

  booking: any;

  constructor(private companyService: CompanyService,
    private notification: NzNotificationService,
  ) { }
  ngOnInit() {
    this.getAllAdBookings()
  }
  getAllAdBookings() {
    this.companyService.getAllAdBookings().subscribe(res => {
      console.log(res);
      this.booking = res;
    })
  }
  changeBookingStatus(bookingId: number, status: string) {
    this.companyService.changeBookingStatus(bookingId, status).subscribe(res => {
      this.notification
        .success(
          'SUCCESS',
          ` Booking status changed successfully`,
          { nzDuration: 5000 }
        );
      this.getAllAdBookings();
    }, error => {
      this.notification
        .error(
          'ERROR',
          `${error.message}`,
          { nzDuration: 5000 }
        )
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
