import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email: string;
  nombre: string;
  telefono: string;
  password: string;

  constructor() {
    this.email = "";
    this.nombre = "";
    this.telefono = "";
    this.password = "";
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty

  }


  register() {
    if (!(this.email == "" && this.nombre == "" && this.telefono == "" && this.password == "")) {
      console.log("Usuario Creado");
    } else {
      console.log("Llena Todos los Campos");
    }
  }
}
