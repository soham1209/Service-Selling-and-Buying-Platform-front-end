import { Component } from '@angular/core';
import { UserServiceService } from './basic/services/storage/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Service';
  isClientLoggedIn: boolean = UserServiceService.isClientLoggedIn();
  isCompanyLoggedIn: boolean = UserServiceService.isCompanyLoggedIn();
  constructor(private router: Router) { }
  ngOnInit() {
    this.router.events.subscribe(event => {
      this.isClientLoggedIn = UserServiceService.isClientLoggedIn();
      this.isCompanyLoggedIn = UserServiceService.isCompanyLoggedIn();
    })
  }
  logout(){
    UserServiceService.signOut();
    this.router.navigateByUrl('login');
  }
}
