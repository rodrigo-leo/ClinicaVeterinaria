import { Component, OnInit } from '@angular/core';
import {Mascotaparaadoptar} from './mascotaparaadoptar';

@Component({
  selector: 'app-adoptame',
  templateUrl: './adoptame.component.html',
  styles: []
})
export class AdoptameComponent implements OnInit {
  public Facebook : String;
  mascotas = [
    new Mascotaparaadoptar("Pelusa","6 meses","","tiene todas sus vacunas","assets/016.jpg"),
    new Mascotaparaadoptar("Laika","2 años","Golden","tiene todas sus vacunas y esta operada","assets/017.jpg"),
    new Mascotaparaadoptar("Clarabella","5 años","","tiene todas sus vacunas necesita cuidados especiales","assets/018.jpg"),
    new Mascotaparaadoptar("Fito","4 meses","","tiene todas sus vacunas, se encuantra castrado","assets/019.jpg"),
  ]
  adoptar = this.mascotas[0];

  constructor() { 
    this.Facebook = "https://www.Facebook.com";
  }

  ngOnInit() {
  }

}
