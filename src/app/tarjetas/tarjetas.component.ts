import { Component } from '@angular/core';
import { AgregarTarjetasComponent } from '../agregar-tarjetas/agregar-tarjetas.component';

interface Tarjeta {
  titulo: string;
  numero: string;
  fechaValidez: string;
  cvv: string;
  apellido: string;
  nombre: string;
}

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss'],
})
export class TarjetasComponent {
  tarjetas = [
    {
      titulo: 'Tarjeta 1',
      numero: '**** **** **** 1234',
      fechaValidez: '12/2024',
      cvv: '***',
      apellido: 'Apellido1',
      nombre: 'Nombre1',
    },
    {
      titulo: 'Tarjeta 2',
      numero: '**** **** **** 5678',
      fechaValidez: '06/2023',
      cvv: '***',
      apellido: 'Apellido2',
      nombre: 'Nombre2',
    },
    {
      titulo: 'Tarjeta 3',
      numero: '**** **** **** 9876',
      fechaValidez: '09/2025',
      cvv: '***',
      apellido: 'Apellido3',
      nombre: 'Nombre3',
    },
  ];

  agregarTarjeta(nuevaTarjeta: Tarjeta) {
    this.tarjetas.push({ ...nuevaTarjeta });
  }

}
