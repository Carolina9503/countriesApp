import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
// import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private apiURL: string = 'https://restcountries.com/v2'

  constructor( private http: HttpClient) { }
  
  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiURL}/name/${termino}`
    return this.http.get<Country[]>(url);
        // .pipe(
        //   catchError(err => of(['Hola Mundo']))
        // );
  }

}
