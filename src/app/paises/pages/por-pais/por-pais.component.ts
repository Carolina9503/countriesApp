import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {
  termino: string = 'Hola Mundo';
  hayError:boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisesService) { }

  ngOnInit(): void {
  }

  buscarPorPais(termono:string){
    this.hayError = false;
    this.termino = termono;

    this.paisService.buscarPais(this.termino).subscribe((paises) => {
      console.log(paises);
      this.paises = paises;
    }, (err) => {
      this.hayError =true
      this.paises = [];
    })
  }

  sugerencias( termino:string ){
    this.hayError = false;
    // TODO: crear sugerencias
  }

}
