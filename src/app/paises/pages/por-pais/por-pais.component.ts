import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {
  termino: string = 'Hola Mundo';
  constructor(private paisService: PaisesService) { }

  ngOnInit(): void {
  }

  buscar(){
    console.log(this.termino)

    this.paisService.buscarPais(this.termino).subscribe(rep => {
      console.log(rep)
    })
  }

}
