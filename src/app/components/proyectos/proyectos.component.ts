import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent {
  tipoFooter:number=3;
  tituloFooter:string="Conocimiento de Tecnologías y Frameworks ";

  listaFooter:any=[
    {
      imagen:"../../../assets/img/angular.png",
      tituloImagen:"Angular"
    },
    {
      imagen:"../../../assets/img/java.png",
      tituloImagen:"Java"
    },
    {
      imagen:"../../../assets/img/sqlserverlogo.png",
      tituloImagen:"SQL Server"
    },
    {
      imagen:"../../../assets/img/mysqllogo.png",
      tituloImagen:"MySQL"
    },
    {
      imagen:"../../../assets/img/scrum.png",
      tituloImagen:"Scrum"
    },
    {
      imagen:"../../../assets/img/net.png",
      tituloImagen:".Net"
    }
  ]
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
    },
    {
      imagen : '../../../assets/img/jsp.png',
      titulo : 'Aplicación Web de Gestión de Horarios de Tutorías Académicas',
      habilidades:[
        'Java',
        'Hibernate',
        'JSP'
      ]
    },
    {
      imagen : '../../../assets/img/polimarketimg.PNG',
      titulo : 'Aplicación Web de Gestión de Pedidos, Productos y Sucursales',
      habilidades:[
        'Angular Framework',
        '.Net 4.7',
        'Entity Framework 6.1',
        'SQL Server',
        'Trello',
        'Figma',
      ]
    },
    {
      imagen : '../../../assets/img/Pholap.jpg',
      titulo : 'Aplicación Móvil para Empresas de Fotografías Profesionales',
      habilidades:[
        'Android',
        'Kotlin',
        'Firebase',
        'Firestore',
      ]
    }
  ]
  
  ngOnInit(){
    document.getElementsByClassName('nav-item').item(2)?.classList.add('current-item');
  }
}
