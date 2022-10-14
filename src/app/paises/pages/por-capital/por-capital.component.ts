import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {
  termino: string = 'Hola Mundo';
  hayError:boolean = false;
  capitales: Country[] = [];

  constructor(private paisService: PaisesService) { }

  ngOnInit(): void {
  }

  buscarPorCapital(termino: string){
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino).subscribe((capital) => {
      this.capitales = capital;
    }, (err) => {
      this.hayError = true;
      this.capitales = [];
    })
  }
}
