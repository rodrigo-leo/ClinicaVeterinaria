import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  
    loginService : LoginService;
    router : Router;
    
  constructor(private http: HttpClient) {
  }

  login(username:string, password:string) {
    return this.http.post('https://reqres.in/api/login', {
      email: username,
      password: password,     
    });     
  }

  logIn(username : string, password: string, event: Event) {
    event.preventDefault(); // Avoid default action for the submit button of the login form

    // Calls service to login user to the api rest
    this.loginService.login(username, password).subscribe(res => {
        console.log(res);
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