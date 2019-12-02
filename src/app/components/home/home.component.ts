import { Component} from '@angular/core';
import { Toy } from './toy';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent{
  title : String;
  name : String;
  email : String;
  barraIzq : String[];
  enlaces : String[];
  facebook : String;
  juguetes = [
    new Toy(1, 'Cajas para mascota',1948.80,"caja para regalo","assets/010.jpg"),
    new Toy(2, 'Paliacates para Perro',459.00, "Collar con tela decorativa","assets/011.jpg"),
    new Toy(3, 'Juguetes para masticar',379.99, "Para perros en crecimiento","assets/012.jpg"),
    new Toy(4, 'Cepillo de dientes para perro',298.99,"Para perros de todas las edades","assets/013.jpg")
  ];
  miCompra = this.juguetes[0];
  constructor() { 
    this.title = "Veterinaria";
    this.name = "Firulais®";
    this.email = "";
    this.barraIzq = ["Programar cita", "Adoptame", "Mascotas Disponibles"];
    this.enlaces = ["Facebook","Twitter","Instagram"];
    this.facebook = "https://www.Facebook.com";

  }
}
