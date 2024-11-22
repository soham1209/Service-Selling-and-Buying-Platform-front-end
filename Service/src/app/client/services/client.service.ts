import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserServiceService } from 'src/app/basic/services/storage/user-service.service';

const BASE_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllAds(): Observable<any> {

    return this.http.get(BASE_URL + `api/client/ads`, {
      headers: this.createAuthorizationHeader()
    })
  }

  searchAdByName(name: any): Observable<any> {
    return this.http.get(BASE_URL + `api/client/search/${name}`, {
      headers: this.createAuthorizationHeader()
    })
  }

  getAdDetailsByAdId(adId: any): Observable<any> {
    return this.http.get(BASE_URL + `api/client/ad/${adId}`, {
      headers: this.createAuthorizationHeader()
    })
  }

  bookService (bookDTO: any): Observable<any>{
   
    return this.http.post(BASE_URL + `api/client/book-service`, bookDTO,{
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
