import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent {

  proyectos = [
    {
      imagen : '../../../assets/img/sicof-odontograma.jpg',
      titulo : "Sistema de Gestión Integrado para el Consultorio Odontológico FullDental's",
      habilidades:[
        'Java',
        'SQL Server',
        'RUP',
      ]
    },
    {
      imagen : '../../../assets/img/docker.png',
      titulo : 'Pipeline de Integración Continua',
      habilidades:[
        'Java',
        'JUnit',
        'Jenkins',
        'Docker'
      ]
    }
  ]

  ngOnInit(){
    document.getElementsByClassName('nav-item').item(2)?.classList.add('current-item');
  }
}
