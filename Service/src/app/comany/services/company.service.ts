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

  postAd (adDTO: any): Observable<any>{
    const userId = UserServiceService.getUserId();
    return this.http.post(BASE_URL + `api/company/ad/${userId}`, adDTO, {
    headers: this.createAuthorizationHeader()
    })
  }
    createAuthorizationHeader(): HttpHeaders{
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
    'Authorization',
    'Bearer' + UserServiceService.getToken()
    )
  }
}
