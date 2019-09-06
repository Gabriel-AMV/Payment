import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { Empleados } from '../classes/empleados';


@Injectable({
  providedIn: 'root'
})
export class FreeapiService {

  constructor(private httpclient: HttpClient) { }

  getEmpleados():Observable<any>{
    return this.httpclient.get("http://localhost:61652/api/PaymentDetails")
  }

  getEmpleadosByParameter(id):Observable<any>{
    return this.httpclient.get("http://localhost:61652/api/PaymentDetails/" + id)
  }

  postEmpleado(pEmpleado:Empleados){
    return this.httpclient.post("http://localhost:61652/api/PaymentDetails",pEmpleado)
  }
  eliminarEmpleado(id:number){
    return this.httpclient.delete("http://localhost:61652/api/PaymentDetails/"+id)
  }

  editarEmpleado(pEmpleado:Empleados){
    return this.httpclient.put("http://localhost:61652/api/PaymentDetails/"+ pEmpleado.PMId,pEmpleado);
  }

}
