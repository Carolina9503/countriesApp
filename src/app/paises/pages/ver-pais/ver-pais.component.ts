import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
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
      .pipe(
        switchMap( ({id}) => this.paisService.getPaisPorAlpha( id ) )
      )
      .subscribe(resp => {
        console.log(resp)
      });

    // this.activatedRoute.params
    //   .subscribe(({id}) =>{
    //     this.paisService.getPaisPorAlpha(id)
    //     .subscribe(pais => {
    //       console.log(pais)
    //     } )
    //   })
  }

}
