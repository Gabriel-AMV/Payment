import { Component } from '@angular/core';
import { FreeapiService } from './services/freeapi.service'
import { Empleados } from './classes/empleados';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD';
  listaEmpleados: Empleados[];
  empleado:Empleados;
  show=false;
  PMID:number;
  insertEmpleado:Empleados = new Empleados();
  constructor(private _service: FreeapiService) {

  }
  eliminarEmpleado(id){
    this._service.eliminarEmpleado(id).subscribe(dato=>{
     var index = this.listaEmpleados.findIndex(empleado=> empleado.PMId == id);
     this.listaEmpleados.splice(index, 1)
    });
    
  }

  editarEmpleado(id){
    this.insertEmpleado = {...this.listaEmpleados.find(empleado => empleado.PMId == id)}
  }

  editarVerdad(){
    this._service.editarEmpleado(this.insertEmpleado).subscribe(data=>{
      this._service.getEmpleados().subscribe(datos=>{
        this.listaEmpleados = datos
      })
    })
  }
  empleadoPorParametro(id){
    this._service.getEmpleadosByParameter(id).subscribe(data =>{
      this.empleado = data;
      console.log(this.empleado)
          })
  }
  insertarEmpleado(){
    console.log(this.insertEmpleado)
    this._service.postEmpleado(this.insertEmpleado).subscribe(data=>{
    })
  }
  ngOnInit() {
    this._service.getEmpleados().subscribe(
      data => {
        this.listaEmpleados = data;
      }
    );
  
  }
}
