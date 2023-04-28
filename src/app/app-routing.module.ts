import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';

const routes: Routes = [
  {
    path:'about-me',
    component:SobreMiComponent
  },
  {
    path:'skills',
    component:HabilidadesComponent
  },
  {
    path:'proyects',
    component:ProyectosComponent
  },
  {
    path:'my-experience',
    component:ExperienciaComponent
  },
  {
    path:'',
    redirectTo:'/about-me',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
