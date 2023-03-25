import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';

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
