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
      imagen:"gmail.png",
      tituloImagen:"davidaguirreg@gmail.com",
      enlace:"",
    },
    {
      imagen:"linkedin.png",
      tituloImagen:"Mi perfil LinkedIn",
      enlace:"https://www.linkedin.com/in/david-aguirre-799244221/"
    },
    {
      imagen:"movistar.png",
      tituloImagen:"+593 995 158 700",
      enlace:"",
    },
  ]
  experiencias = [
    {
      imagen : 'GlodFigma.jpg',
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
    {
      imagen : 'logoepn.png',
      cargo : "Miembro Evaluador de Mallas Curriculares",
      empresa: "Escuela Politécnica Nacional",
      periodo: "Enero 2023 - Marzo 2023",
      actividades:[
        'Evaluar mallas curriculares de la Facultad de Ingeniería de Sistemas',
        'Participar en debates referentes aspectos de las materias de la mallas curriculares',
        'Proponer soluciones de mejora de contenidos de mallas curriculares',
        'Evaluar recursos disponibles para maestros y estudiantes',
        'Calificar métodos de enseñanza-aprendizaje utilizados'
      ]
    },
    {
      imagen : 'Banco-Pichincha.png',
      cargo : "Gestor de Contratos Tecnológicos",
      empresa: "Banco Pichincha",
      periodo: "Abril 2023 - Septiembre 2023",
      actividades:[
        'Desbloquear flujos de contratos tecnológicos',
        'Analizar garantías de proveedores',
        'Actualizar matriz de flujos de contratos',
        'Monitorear avances en los flujos de contratos',
        'Actualizar reportes en Power BI'
      ]
    },
  ]


  ngOnInit(){
    document.getElementsByClassName('nav-item').item(3)?.classList.add('current-item');
  }
}
