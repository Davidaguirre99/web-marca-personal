import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoPrincipalComponent } from './components/contenido-principal/contenido-principal.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';

const routes: Routes = [
  {
    path:'main-content',
    component: ContenidoPrincipalComponent,
    children:[
      {
        path:'about-me',
        component:SobreMiComponent
      }
    ]
  },
  {
    path:'',
    redirectTo:'/main-content/about-me',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
