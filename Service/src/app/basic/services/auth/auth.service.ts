import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserServiceService } from '../storage/user-service.service';

const BASE_URL = 'http://localhost:8080/';
export const AUTH_HEADER = 'authorization';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private UserStorageService : UserServiceService
  ) { }

  registerClient(signupRequestDTO: any): Observable<any> {
    return this.http.post(BASE_URL + "client/sign-up", signupRequestDTO);
  }


  registerCompony(signupRequestDTO: any): Observable<any> {
    return this.http.post(BASE_URL + "company/sign-up", signupRequestDTO);
  }

  login(username: string, password: string) {
    return this.http.post(BASE_URL + "authenticate", { username, password }, { observe: 'response' })
      .pipe(
        map((res: HttpResponse<any>) =>{
          console.log(res.body)
          this.UserStorageService.saveUser(res.body);
          const tokenLength = res.headers.get(AUTH_HEADER)?.length;
          const bearerToken = res.headers.get(AUTH_HEADER)?.substring(7,tokenLength);
          console.log(bearerToken);
          this.UserStorageService.saveToken(bearerToken);
          return res;

        })
      );
}
}
