import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { User } from '../user/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  logIn(username: string, password: string, event: Event) {
    event.preventDefault(); // Avoid default action for the submit button of the login form

    // Calls service to login user to the api rest
    this.loginService.login(username, password).subscribe(

      res => {
        let u: User = {username: username};        
        this.userService.setUserLoggedIn(u);

      },
      error => {
        console.error(error);

      },
      () => this.navigate()
    );

  }

  navigate() {    
    this.router.navigateByUrl('/home');
  }

}
