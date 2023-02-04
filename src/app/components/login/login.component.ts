import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor() {
    this.email = "";
    this.password = "";
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty

  }

  login() {
    console.log("Email: " + this.email);
    console.log("Password: " + this.password);

    if (this.email == "admin" && this.password == "linux") {
      console.log("Bienvenido Administrador");
    } else {
      console.log("Acceso Denegado");
    }
  }

}
