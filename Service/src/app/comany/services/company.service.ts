import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserServiceService } from 'src/app/basic/services/storage/user-service.service';

const BASE_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  postAd(adDTO: any): Observable<any> {
    const userId = UserServiceService.getUserId();
    return this.http.post(BASE_URL+`api/company/ad/${userId}`, adDTO, {
      headers: this.createAuthorizationHeader()
    })
  }

  getAllAdsByUserId(): Observable<any> {
    const userId = UserServiceService.getUserId();
    return this.http.get(BASE_URL + `api/company/ads/${userId}`, {
      headers: this.createAuthorizationHeader()
    })
  }

  createAuthorizationHeader(): HttpHeaders {
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer ' + UserServiceService.getToken()
    )
  }
}


// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { UserServiceService } from 'src/app/basic/services/storage/user-service.service';
// // import { environment } from 'src/environments/environment';

// @Injectable({
//   providedIn: 'root',
// })
// export class CompanyService {
//   private BASE_URL =  'http://localhost:8080/'// Use environment variable for base URL

//   constructor(private http: HttpClient, private userService: UserServiceService) {}

//   postAd(adDTO: any): Observable<any> {
//     const userId = UserServiceService.getUserId(); // Use DI instead of static method
//     return this.http
//       .post(`${this.BASE_URL}/api/company/ad/${userId}`, adDTO, {
//         headers: this.createAuthorizationHeader(),
//       })
//       .pipe(catchError(this.handleError)); // Handle errors
//   }

//   getAllAdsByUserId(): Observable<any> {
//     const userId = UserServiceService.getUserId(); // Use DI instead of static method
//     return this.http
//       .get(`${this.BASE_URL}/api/company/ads/${userId}`, {
//         headers: this.createAuthorizationHeader(),
//       })
//       .pipe(catchError(this.handleError)); // Handle errors
//   }

//   private createAuthorizationHeader(): HttpHeaders {
//     const token = UserServiceService.getToken(); // Use DI instead of static method
//     let authHeaders: HttpHeaders = new HttpHeaders();

//     if (token) {
//       authHeaders = authHeaders.set('Authorization', `Bearer ${token}`);
//     }

//     return authHeaders;
//   }

//   private handleError(error: any): Observable<never> {
//     // Log error or notify user
//     console.error('An error occurred:', error);
//     return throwError(() => new Error(error.message || 'Server Error'));
//   }
// }
