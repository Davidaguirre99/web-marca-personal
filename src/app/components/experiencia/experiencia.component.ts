import { Component } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent {
  tipoFooter:number=3;
  tituloFooter:string="Puede contactarme por los siguientes medios:";

  listaFooter:any=[
    {
      imagen:"../../../assets/img/gmail.png",
      tituloImagen:"davidaguirreg@gmail.com",
      enlace:"",
    },
    {
      imagen:"../../../assets/img/linkedin.png",
      tituloImagen:"Mi perfil LinkedIn",
      enlace:"https://www.linkedin.com/in/david-aguirre-799244221/"
    },
    {
      imagen:"../../../assets/img/movistar.png",
      tituloImagen:"+593 995 158 700",
      enlace:"",
    },
  ]
  experiencias = [
    {
      imagen : '../../../assets/img/GlodFigma.jpg',
      cargo : "Desarrollador Frontend",
      empresa: "Manticore Labs",
      periodo: "Abril 2022 - Julio 2022",
      actividades:[
        'Levantamiento de requerimientos',
        'Comunicación con clientes',
        'Análisis de bases de datos',
        'Diseño UX/UI con Figma',
        'Desarrollo frontend'
      ]
    },
  ]


  ngOnInit(){
    document.getElementsByClassName('nav-item').item(3)?.classList.add('current-item');
  }
}
