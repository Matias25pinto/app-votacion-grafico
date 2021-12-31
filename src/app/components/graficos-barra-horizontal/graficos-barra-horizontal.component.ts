import { Component, Input, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-graficos-barra-horizontal',
  templateUrl: './graficos-barra-horizontal.component.html',
  styleUrls: ['./graficos-barra-horizontal.component.css']
})
export class GraficosBarraHorizontalComponent implements OnDestroy{

  @Input() results: any = [];

 /* results: any[] = [
    {
      "name": "Juego 1",
      "value": 20
    },
    {
      "name": "Juego 2",
      "value": 15
    },
    {
      "name": "Juego 3",
      "value": 23
    },
    {
      "name": "Juego 4",
      "value": 19
    }
  ];
  */


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  intervalo;

  constructor() {
    /*
    this.intervalo = setInterval( () => {
      console.log('tick');

      const newResults = [...this.results];

      // tslint:disable-next-line: forin
      for (const i in newResults) {
       newResults[i].value = Math.round( Math.random() * 500);
      }

      this.results = [...newResults];

    }, 1500);
    */
  }

  onSelect(event): void {
    console.log(event);
  }
  /*
  ngOnDestroy(): void{
    clearInterval(this.intervalo); // se destruye el intervalo
  }
  */
 ngOnDestroy(): void{}

}
