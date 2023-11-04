import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { AgregarTarjetasComponent } from '../agregar-tarjetas/agregar-tarjetas.component';
import { TarjetasComponent } from '../tarjetas/tarjetas.component';
import { HomePageRoutingModule } from './home-routing.module';
import { LoginComponent } from '../login/login.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, AgregarTarjetasComponent, TarjetasComponent]
})
export class HomePageModule {}
