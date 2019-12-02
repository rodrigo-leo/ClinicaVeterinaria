import { Component, OnInit } from '@angular/core';
import {Mascotaparacomprar} from './mascotaparacomprar';

@Component({
  selector: 'app-mascotasdiponibles',
  templateUrl: './mascotasdiponibles.component.html',
  styles: []
})
export class MascotasdiponiblesComponent implements OnInit {

  public mascotas = [
    new Mascotaparacomprar("San bernardo","$10,000","1 año","","assets/003.jpg"),
    new Mascotaparacomprar("Huscky","$5,000","3 meses","Con vacunas","assets/004.jpg"),
    new Mascotaparacomprar("Golden","$8,000","1 año","con vacunas","assets/005.jpg"),
    new Mascotaparacomprar("Rottweiler","$15,000","2 meses","Con vacunas","assets/006.jpg"),
    new Mascotaparacomprar("Pitbull","$18,000","1 año","Con vacunas","assets/007.jpg"),
    new Mascotaparacomprar("Pastor Alemán","$20,000","1 año","Entrenado y con vacunas","assets/009.jpg"),
  ]
  public miMascota = this.mascotas[0];
  constructor() { }

  ngOnInit() {
  }

}
