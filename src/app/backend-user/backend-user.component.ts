import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';
import { BackendUserService } from '../backend-user.service';

@Component({
  selector: 'app-backend-user',
  templateUrl: './backend-user.component.html',
  styleUrls: ['./backend-user.component.css']
})
export class BackendUserComponent implements OnInit {

  //these variables are used to change the back-end user table to the form of editing or the form of store
  ChangeTemplateEditar=true;
  ChangeTemplateAgregar=true;

  //these variables are used to take the value of the id of the inputs in the HTML
  //store
  u_usuario;
  u_mail;
  u_contrasena;
  ConfirmPassword;

  //edit
  ConfirmNewPassword;
  Password;
  Id;

  Listed;
//the function of these boleans are for validation alerts
  AlertUser = false;
  AlertMail = false;
  AlertPassword = false;
  AlertConfirmPassword = false;
  AlertNewPassword = false;


  EditPasswordVar = false;
  
  var;
  CheckAcumulador = new Array();
  NumberAux=0;
  PositionAux = 0;
  i=0;
  Booleano = true;
  edit;
  edit_usuarios;
  listado;

  constructor(private backendUserService : BackendUserService) { }

  ngOnInit() {
    // if(localStorage.getItem("keyTwo") != "1"){
    //   location.href="../../admin";
    // }
    this.Listar();
  }

  EditPassword(){
    this.EditPasswordVar = true;
  }

//this function show the Store form 
  ShowStoreForm(){
    this.ChangeTemplateEditar= false;
  }

//this funtion show the edit form and send the values of the data base in to the inputs of the forms
  ShowEditForm(u_id : number){
    this.ChangeTemplateAgregar=false;
    this.ChangeTemplateEditar=false;
    this.backendUserService.getJsonID(u_id,this.listado)
    .subscribe(resultado => this.edit_usuarios = resultado);
  }

//this funtion returns of the backend users table
  ReturnToTheTableUsers(){
    this.ChangeTemplateEditar=true;
    this.ChangeTemplateAgregar=true;
    this.EditPasswordVar = false;
    this.AlertUser = false;
    this.AlertConfirmPassword = false;
    this.AlertMail = false;
    this.AlertNewPassword = false;
    this.AlertPassword = false;
  }


  Listar(){
        this.backendUserService.Conect(5,0,"0","0","0")
          .map((response) => response.json())
          .subscribe((data) => { 
          this.listado = data;
        });
  }

//this function take the values of the iputs and send the values of the data base
  Edit(u_id : number){
    this.u_usuario = document.getElementById("edit_usuario");
    this.u_mail = document.getElementById("edit_mail");
    this.u_contrasena = document.getElementById("NewPassword");
    this.ConfirmNewPassword = document.getElementById("ConfirmNewPassword");
    this.Password = document.getElementById("Password");
    this.Id = document.getElementById("u_id");
//when don´t press the button " cambiar contrasena" in the edit form
    if(this.EditPasswordVar == false ){

      if(this.u_usuario.value == ""){
        this.AlertUser = true;
      }else{
        this.AlertUser = false;
      }

      if(this.u_mail.value == ""){
        this.AlertMail = true;
      }else{
        this.AlertMail = false;
      }
      if(this.u_usuario.value != "" && this.u_mail.value != ""){
        this.backendUserService.Conect(7,u_id,this.u_usuario.value,this.u_mail.value,"0")
        .subscribe((data)=>{ this.var=data;});
            // this.ListBackendUsers();
          location.reload();
        }
//when press the button " cambiar contrasena" in the edit form
    }else if(this.EditPasswordVar == true){

      if(this.u_usuario.value == ""){
        this.AlertUser = true;
      }else{
        this.AlertUser = false;
      }

      if(this.u_mail.value == ""){
        this.AlertMail = true;
      }else{
        this.AlertMail = false;
      }

      if(this.u_contrasena.value != this.ConfirmNewPassword.value){
        this.AlertNewPassword = true;
      }else{
        this.AlertNewPassword = false;
      }

      if(this.Password.value == ""){
        this.AlertPassword = true;
      }else{
        this.AlertPassword = false;        
      }

      if(this.u_usuario.value != "" && this.u_mail.value != "" && this.u_contrasena.value == this.ConfirmNewPassword.value && this.u_contrasena != "" && this.Password.value != ""){
              this.backendUserService.Conect(4,u_id,this.u_usuario.value,this.u_mail.value,this.u_contrasena.value)
              .subscribe((data)=>{
                 this.var=data;
              console.log(data)
              });
            //  location.reload();
        }
     } 
  }
// this function accumulates the checks that are in the table to be deleted later
  Check(u_id : number){
     this.Booleano=true;    
    console.log("Contador: " + this.NumberAux);
    if(this.NumberAux == 0){
      this.CheckAcumulador[0] = u_id;
      this.NumberAux++;
      console.log("Primer numero en la lista: " + u_id)
    }else{
      for(this.i = 0; this.i<this.NumberAux ; this.i++){
        if(u_id == this.CheckAcumulador[this.i]){
          this.CheckAcumulador.splice(this.i, 1);
          this.Booleano = false;
          console.log("El numero: " + u_id + " está en la posicion: " + this.i);
          this.NumberAux++;
        }
      }
      if(this.Booleano){
          this.CheckAcumulador[this.NumberAux] = u_id;
          console.log("Se agrego en el numero: " + u_id + ", en la posicion: " + this.NumberAux);
          this.NumberAux++;
        }
      }
    }

// this function delete the backend users of the table that are select whith the chek
  Delete(){
    for(this.i=0; this.i<this.NumberAux; this.i++){
      if(this.CheckAcumulador[this.i] == undefined){
        console.log("Indefinido");
      }else{
        this.backendUserService.Conect(2, this.CheckAcumulador[this.i],"0","0","0")
        .subscribe((data) => { 
          this.var = data;
        });
      }
      location.reload();

  }
    this.Listar();
  }

//this function add users in to the data base
  Store(){
    this.u_usuario = document.getElementById("u_usuario");
    this.u_mail = document.getElementById("u_mail");
    this.u_contrasena = document.getElementById("u_contrasena");
    this.ConfirmPassword = document.getElementById("ConfirmPassword");
    
    if(this.u_usuario.value == ""){
      this.AlertUser = true;
    }else{
      this.AlertUser = false;
    } 
    if(this.u_mail.value == "" ){
      this.AlertMail = true;
    }else{
      this.AlertMail = false;
    } 
    if(this.u_contrasena.value != this.ConfirmPassword.value){
      this.AlertPassword = true;
    }else{
      this.AlertPassword = false;
    }
    if(this.u_usuario.value != "" && this.u_mail.value != "" && this.u_contrasena.value == this.ConfirmPassword.value && this.u_contrasena.value != "" && this.ConfirmPassword.value != "" ){

      this.backendUserService.Conect(
        3,
        0,
        this.u_usuario.value,
        this.u_mail.value,
        this.u_contrasena.value
      )
      .subscribe((result)=>{this.var=result;});
      // this.ListBackendUsers();
      location.reload();
      
      this.ChangeTemplateEditar=true;
    }
    }
    


}
