import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de empleados';
  empleados:Empleado[]=[
    new Empleado("Iván", "Aguilar", "Especialista", 100000),
    new Empleado("Valentín", "Aguilar", "Técnico", 50000),
    new Empleado("Evelyn", "Raynal", "Secretaria", 90000),
    new Empleado("Ailén", "Aguilar", "Cajera", 25000),
    

  ];

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido,this.cuadroCargo, this.cuadroSalario);
    this.empleados.push(miEmpleado);
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
}
