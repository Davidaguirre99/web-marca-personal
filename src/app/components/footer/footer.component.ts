import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input()
  tipoFooter:number=1;
  @Input()
  tituloFooter:string='VALORES';
  @Input()
  listaFooter:any[]=[
    {
      imagen:"assets/img/honest.png",
      tituloImagen:"Honestidad",
      enlace:"",
    },
    {
      imagen:"assets/img/loyalty.png",
      tituloImagen:"Lealtad",
      enlace:"",
    },
    {
      imagen:"assets/img/respect.png",
      tituloImagen:"Respeto",
      enlace:"",
    },
    {
      imagen:"assets/img/discipline.png",
      tituloImagen:"Disciplina",
      enlace:"",
    },
  ];
  constructor(
    private readonly router:Router,
    private readonly activatedRouter:ActivatedRoute
  ){
  }
  ngOnInit(){
    const compo$ = this.activatedRouter.params;
    compo$.subscribe((parametros)=>{
      console.log("parametros=",parametros);
    })

    const paths$ = this.activatedRouter.url;
    paths$.subscribe((resultados)=>{
      console.log("resultados =",resultados);
    })
  }
}
