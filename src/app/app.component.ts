import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //chamada de template
  styleUrls: ['./app.component.css'], //chamada de estilo
})

//Classe AppComponent
export class AppComponent {
  title = 'lista-anne';
  //Array de objetos com os dados dos alunos
  alunos = [
    {
      //dados dos alunos
      nome: 'Anne Barbosa',
      ru: 3283442,
      curso: 'Análise e desenvolvimento de sistemas',
      dataAniversario: '24/07/1998',
    },
    {
      nome: 'Fernanda Oliveira',
      ru: 2928542,
      curso: 'Análise e desenvolvimento de sistemas',
      dataAniversario: '18/02/1994',
    },
    {
      nome: 'Matheus Silva',
      ru: 1438884,
      curso: 'Análise e desenvolvimento de sistemas',
      dataAniversario: '01/04/2000',
    },
    {
      nome: 'Robson Andrade',
      ru: 5417376,
      curso: 'Análise e desenvolvimento de sistemas',
      dataAniversario: '19/12/1990',
    },
    {
      nome: 'Andrea Godoi',
      ru: 1922312,
      curso: 'Análise e desenvolvimento de sistemas',
      dataAniversario: '30/08/1996',
    },
  ];
}
