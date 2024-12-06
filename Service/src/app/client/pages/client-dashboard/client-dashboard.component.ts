import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss']
})
export class ClientDashboardComponent {

  ads: any = [];
  validateForm!: FormGroup;

  constructor(private clientService: ClientService,
    private fb: FormBuilder) { }

  getAllAds() {
    this.clientService.getAllAds().subscribe(res => {
      this.ads = res;
    })
  }
  ngOnInit() {
    this.validateForm = this.fb.group({
      service: [null, [Validators.required]]
    })
    this.getAllAds();
  }

  searchAdByName() {
    this.clientService.searchAdByName(this.validateForm.get(['service']).value).subscribe(res => {
      this.ads = res;
    })
  }
  updateImg(img) {
    return 'data:image/jpeg;base64,' + img;
  }

  getCardBackground(index: number): string {
    return index % 2 === 0 ? '#06BEE1' : '#2541B2'; // Blue for even index, Light blue for odd index
  }
  getUpdateButtonColor(backgroundColor: string): string {
    if (backgroundColor === '#2541B2') {
      return '#06BEE1'; // Opposite of #2541B2
    } else if (backgroundColor === '#06BEE1') {
      return '#2541B2'; // Opposite of #06BEE1
    }
    return '#000000'; // Default color if not matched
  }
}