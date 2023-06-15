import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{

    constructor(private servicioVentanaEmergente: ServicioEmpleadosService){

    }

    empleados:Empleado[]=[
        new Empleado("Artashes", "Asatryan", "Programador", 2),
        new Empleado("Ana", "Lopez", "Programador", 2),
        new Empleado("Juan", "Martinez", "Programador", 2),
        new Empleado("Paco", "Flores", "Programador", 2),
    ];

    agregarEmpleadoServicio(empleado:Empleado){
        this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: " + "\n" + empleado.nombre + "\n" + empleado.salario);
        this.empleados.push(empleado);
    }
}