import { Component } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent {
  tipoFooter:number=2;
  tituloFooter:string="IDIOMAS";
  imagenesSlides:string[]=[
    "assets/img/trabajo_en_equipo.JPG"
  ]
  listaFooter:any=[
    {
      imagen:"assets/img/medal.png",
      tituloImagen:"Suficiencia B2 en Inglés"
    }
  ]
  ngOnInit(){
    document.getElementsByClassName('nav-item').item(1)?.classList.add('current-item');
  }
}
