import { Component, OnInit } from '@angular/core';
import { LoginService } from './components/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title : String;
  name : String;
  email : String;
  barraIzq : String[];
  enlaces : String[];
  facebook : String;
  loginService : LoginService;

  constructor(){
  this.title = "Veterinaria";
  this.name = "Firulais®";
  this.email = "";
  this.barraIzq = ["Programar cita", "Adoptame", "Mascotas Disponibles"];
  this.enlaces = ["Facebook","Twitter","Instagram"];
  this.facebook = "https://www.Facebook.com";
  }

  ngOnInit(){
    this.loginService.login('peter@klaven','qwerty').subscribe(res =>{console.log(res)})
  }
}