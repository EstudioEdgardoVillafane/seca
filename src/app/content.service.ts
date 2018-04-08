import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ContentService {

  constructor(private http: Http) { }

  CrudFunction(FunctionPhp: number, id: number, titulo: string, subtitulo: string, descripcion: string, imagen: string){
    return this.http.get('php/script/crud-content.php?data='+FunctionPhp+'&id='+id+'&titulo='+titulo+'&subtitulo='+subtitulo+'&descripcion='+descripcion+'&imagen='+imagen);
  }
  getJsonForID(id:number, json){
    return of(json.find((primero => primero.u_id === id)));
  }
  getJsonForName(name:string, json){
    return of(json.find((primero => primero.u_titulo === name)));
  }
}
