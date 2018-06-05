import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class BackendUserService {

  constructor(private Http: Http) { }
  Conect(func: number, u_id : number, u_usuario : string, u_mail : string, u_contrasena : string){
    return this.Http.get('php/scripts/usuarios.php?data='+func+'&u_id='+u_id+"&u_usuario="+u_usuario+"&u_mail="+u_mail+"&u_contrasena="+u_contrasena);
     //Devuelve el resultado del php como objeto.
  }
  Confirm(Funct: number, u_id : number, Password : string, u_usuario : string){
    
    return this.Http.get('php/scripts/usuarios.php?data='+Funct+'&u_id='+u_id+"&password="+Password+'&u_usuario='+u_usuario);
     //Devuelve el resultado del php como objeto.
  }
  // validateUser(){
  //   return this.Http.get('php/scripts/user-validate.php');
  // }
  getJsonID(u_id : number, json){
    return of(json.find(primero => primero.u_id === u_id));
  } 
  getJsonUSER(u_usuario : string, json){
    return of(json.find(primero => primero.u_usuario === u_usuario));
  } 
}
