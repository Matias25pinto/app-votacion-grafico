import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { Game } from '../../interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  juegos: any[] = [];

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {

    this.db.collection('goty').valueChanges()
      .pipe(
        map( (resp: Game[]) => {

          return resp.map( ({name, votos}) => ({name, value: votos})); // usa desestructuracion para asignar los valores

        })
      )
      .subscribe( juegos => {
        //console.log(juegos);
        this.juegos = juegos;
      });
  }

}
