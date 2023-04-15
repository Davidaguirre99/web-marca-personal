import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  navItems:any=[];
  constructor(
    private readonly router:Router,
  ){

  }
  ngOnInit(){
    this.navItems=document.getElementsByClassName("nav-item");
    for (const navItem of this.navItems) {
      console.log("nav item =",navItem);
      document.getElementById('f')?.classList.add('current-item');
    }
  }
  changeBackgroundColor(navItemIndex:number){
    if(this.navItems){
      let indice = 0;
      for(const navItem of this.navItems){
        if(indice===navItemIndex){
          navItem?.classList.add('current-item');
        }else{
          navItem?.classList.remove('current-item');
        }
        indice++;
      }
    }
  }
  irAHabilidades(){
    const ruta = ['skills'];
    this.router.navigate(ruta);
  }
  irASobreMi(){
    const ruta = ['about-me'];
    this.router.navigate(ruta);
  }
  irAProyectos(){
    const ruta = ['proyects'];
    this.router.navigate(ruta);
  }
}
