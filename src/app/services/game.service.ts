import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Game } from '../interfaces/interfaces';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class GameService {


  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: ban-types
  getNominados(): Observable<Game[]>{

    return this.http.get<Game[]>(`${ environment.url }/api/goty`);
  }

  votarJuego( id: string ){

    return this.http.post(`${ environment.url }/api/goty/${ id }`, {})
            .pipe(
              catchError( err => {
                console.log('Error en la peticion');
                return of(err.error);
              })
            )
  }
}
