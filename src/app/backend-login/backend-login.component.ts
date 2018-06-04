import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { AppComponent } from '../app.component';
import { BackendLoginService } from '../backend-login.service'

@Component({
  selector: 'app-backend-login',
  templateUrl: './backend-login.component.html',
  styleUrls: ['./backend-login.component.css']
})
export class BackendLoginComponent implements OnInit {

  constructor(private backendLoginService : BackendLoginService) { }

  UserOnline = true;
  userValue ;
  Listado;
  usuario;
  contrasena;
  BooleanAlertLogin = false;
  Aux : string;
 
  onClick(){
    this.usuario=document.getElementById("usuario");
    this.contrasena= document.getElementById("contrasena");
    this.backendLoginService.conect(
      1,0,this.usuario.value,this.contrasena.value
    )
    .subscribe((data) => {
      console.log(data.text());
     if(data.text() == " 0"){
       this.BooleanAlertLogin = true;
      }else{
        localStorage.setItem("keyTwo","1");    
        location.href="admin/online/usos";
      }
    });
  }

  ngOnInit() {
    if(localStorage.getItem("keyTwo") == "1"){
      location.href="admin/online/usos";
    }
  }
}
