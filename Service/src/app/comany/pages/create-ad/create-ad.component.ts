import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CompanyService } from '../../services/company.service';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.scss']
})
export class CreateAdComponent {

  selectedFile: File | null;
  imagePreview: string | ArrayBuffer | null;
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private notification: NzNotificationService,
    private router: Router,
    private companyService: CompanyService) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      serviceName: [null, [Validators.required]],
      description: [null, [Validators.required]],
      price: [null, [Validators.required]],
    })
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }
  triggerFileUpload(event:Event){

  }
  previewImage() {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    }
    reader.readAsDataURL(this.selectedFile);
  }
  postAd() {
    const formData: FormData = new FormData();
    formData.append('img', this.selectedFile);
    formData.append('serviceName', this.validateForm.get('serviceName').value);
    formData.append('description', this.validateForm.get('description').value);
    formData.append('price', this.validateForm.get('price').value);
  
    this.companyService.postAd(formData)
      .pipe(
        tap(() => {
          this.notification.success(
            'SUCCESS',
            'Ad Posted Successfully!',
            { nzDuration: 5000 }
          );
          this.router.navigateByUrl('/company/ads');
        }),
        catchError((error) => {
          this.notification.error(
            'ERROR',
            // error.message || 'An error occurred',
            `${console.log(error)}`,
            { nzDuration: 5000 }
          );
          return of(null); // Prevent the observable from breaking.
        })
      )
      .subscribe();
  }
}
