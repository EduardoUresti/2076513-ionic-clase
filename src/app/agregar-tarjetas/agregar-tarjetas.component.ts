import { Component, Output, EventEmitter } from '@angular/core';

interface Tarjeta {
  numero: string;
  fechaValidez: string;
  cvv: string;
  apellido: string;
  nombre: string;
}

@Component({
  selector: 'app-agregar-tarjetas',
  templateUrl: './agregar-tarjetas.component.html',
  styleUrls: ['./agregar-tarjetas.component.scss'],
})
export class AgregarTarjetasComponent {
  nuevaTarjeta: Tarjeta = {
    numero: '',
    fechaValidez: '',
    cvv: '',
    apellido: '',
    nombre: '',
  };

  @Output() tarjetaAgregada = new EventEmitter<Tarjeta>();

  agregarTarjeta() {
    this.tarjetaAgregada.emit(this.nuevaTarjeta);
    this.nuevaTarjeta = {
      numero: '',
      fechaValidez: '',
      cvv: '',
      apellido: '',
      nombre: '',
    };
  }
}