import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisesService) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .subscribe(({id}) =>{
        this.paisService.getPaisPorAlpha(id)
        .subscribe(pais => {
          console.log(pais)
        } )
      })
  }

}
