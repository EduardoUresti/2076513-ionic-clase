import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { AgregarTarjetasComponent } from '../agregar-tarjetas/agregar-tarjetas.component';
import { TarjetasComponent } from '../tarjetas/tarjetas.component';

const routes: Routes = [
  { path: '', redirectTo: 'tarjetas', pathMatch: 'full' },
  { path: 'tarjetas', component: TarjetasComponent },
  { path: 'agregarTarjetas', component: AgregarTarjetasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}