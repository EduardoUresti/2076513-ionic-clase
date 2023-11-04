import { NgModule } from '@angular/core';
import { PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';
import { AgregarTarjetasComponent } from './agregar-tarjetas/agregar-tarjetas.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'tarjetas', component: TarjetasComponent },
  { path: 'agregarTarjetas', component: AgregarTarjetasComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    RouterModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
