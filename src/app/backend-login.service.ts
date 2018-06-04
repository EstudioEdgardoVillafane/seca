import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class BackendLoginService {

  constructor(private http : Http) { }
  conect(Funct: number, u_id : number, u_usuario : string, u_contrasena : string ){
    
    return this.http.get('php/script/usuarios.php?data='+Funct+'&u_id='+u_id+"&u_usuario="+u_usuario+"&u_contrasena="+u_contrasena);
     //Devuelve el resultado del php como objeto.
  }
}
    
